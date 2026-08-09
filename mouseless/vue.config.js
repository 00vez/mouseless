const path = require('path')

const isWebTarget = process.env.VUE_APP_TARGET === 'web'

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/variables.scss";',
      },
    },
  },

  pwa: isWebTarget
    ? {
      name: 'OhneMaus',
      themeColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
        short_name: 'OhneMaus',
        display: 'standalone',
        start_url: '.',
      },
      iconPaths: {
        // no safari-pinned-tab.svg generated, skip the mask-icon link tag
        maskIcon: null,
      },
    }
    : undefined,

  chainWebpack: config => {
    if (isWebTarget) {
      // no browser API exists to read the OS keyboard layout
      config.resolve.alias.set('native-keymap', path.resolve(__dirname, 'src/services/staticKeymap.js'))
      // no main process / native shell to talk to over IPC in a browser
      config.resolve.alias.set('electron', path.resolve(__dirname, 'src/services/electronStub.js'))
      config.resolve.alias.set('@electron/remote', path.resolve(__dirname, 'src/services/electronStub.js'))
      // native .node binary, never reachable at runtime in the web build
      // (Setapp.isActive is false), but webpack still parses the require()
      config.resolve.alias.set(
        path.resolve(__dirname, 'src/services/setappNative.js'),
        path.resolve(__dirname, 'src/services/electronStub.js'),
      )
      return
    }

    // required for 'native-ext-loader'
    config.node.set('__dirname', true)

    config.target('electron-renderer')

    config
      .output
      .globalObject('(typeof self !== "undefined" ? self : this)')

    config.module
      .rule('node')
      .test(/\.node$/)
      .use('native-ext-loader')
      .loader('native-ext-loader')
      .end()

    config.module
      .rule('worker')
      .test(/\.worker\.js$/i)
      .use('worker-loader')
      .loader('worker-loader')
      .end()

    config.resolve.extensions.prepend('.node')
  },

  pluginOptions: isWebTarget
    ? {
      pwa: {
        name: 'OhneMaus',
        themeColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestOptions: {
          short_name: 'OhneMaus',
          display: 'standalone',
          start_url: '.',
        },
        iconPaths: {
          // no safari-pinned-tab.svg generated, skip the mask-icon link tag
          maskIcon: null,
        },
      },
    }
    : {
      electronBuilder: {
        chainWebpackMainProcess: config => {
          const nodeLoader = process.env.NODE_ENV === 'development'
            ? 'node-loader'
            : 'native-ext-loader'

          config.module
            .rule('node')
            .test(/\.node$/)
            .use(nodeLoader)
            .loader(nodeLoader)
            .end()

          config.resolve.extensions.add('.js').add('.node')
        },
        builderOptions: {
          appId: process.env.VUE_APP_IS_SETAPP === 'true'
            ? 'com.ohnemaus.setapp'
            : 'com.ohnemaus.app',
          artifactName: '${productName}-${version}-${os}.${ext}', // eslint-disable-line
          afterSign: 'electron-builder-notarize',
          productName: 'OhneMaus',
          mac: {
            mergeASARs: false,
            target: {
              target: 'default',
              arch: 'universal'
            },
            hardenedRuntime: true,
            gatekeeperAssess: false,
            entitlements: 'build/entitlements.mac.plist',
            entitlementsInherit: 'build/entitlements.mac.plist',
            extendInfo: {
              NSUserNotificationAlertStyle: 'alert',
            },
            publish: [
              {
                provider: 'spaces',
                name: 'ueber',
                region: 'fra1',
                channel: 'latest',
                path: '/ohnemaus/mac',
                acl: 'public-read',
              },
            ],
          },
        },
      },
    },
}
