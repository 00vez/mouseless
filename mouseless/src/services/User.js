import Store from './Store'
import Setapp from './Setapp'

const isWebTarget = process.env.VUE_APP_TARGET === 'web'

export default new class {

  get email() {
    return Store.get('verification.purchase.email', null)
  }

  get isVerified() {
    // no purchase flow in the free web version
    if (isWebTarget) {
      return true
    }

    if (Setapp.isActive) {
      return true
    }

    const verification = Store.get('verification', null)

    return verification
      ? !!verification.success
      : false
  }

}()
