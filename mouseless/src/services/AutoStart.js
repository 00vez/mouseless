import Store from './Store'
import { app, isProduction } from '../helpers'

const isWebTarget = process.env.VUE_APP_TARGET === 'web'

export default new class {
  update() {
    // no login-item concept in a browser
    if (isWebTarget) {
      return
    }

    if (isProduction) {
      app.setLoginItemSettings({
        openAtLogin: Store.get('autoStart'),
        openAsHidden: true,
        path: app.getPath('exe'),
      })
    }
  }
}()
