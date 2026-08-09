// Stand-in for 'electron' / '@electron/remote' in the web build. None of
// this has a real browser equivalent (no main process, no window chrome to
// control), so every call is a safe no-op — except openExternal, which maps
// to a plain window.open so links still work.
// Aliased in place of 'electron'/'@electron/remote' via vue.config.js when
// VUE_APP_TARGET=web.

function noop() {}

module.exports = {
  ipcRenderer: {
    send: noop,
    on: noop,
    removeListener: noop,
  },
  shell: {
    openExternal(url) {
      window.open(url, '_blank')
    },
  },
  app: {
    relaunch: noop,
    exit: noop,
    getVersion: () => '',
    getPath: () => '',
    setLoginItemSettings: noop,
  },
}
