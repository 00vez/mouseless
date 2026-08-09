const isWebTarget = process.env.VUE_APP_TARGET === 'web'

function getNested(object, key) {
  return key.split('.').reduce((value, prop) => (
    value === null || typeof value === 'undefined' ? undefined : value[prop]
  ), object)
}

function setNested(object, key, value) {
  const props = key.split('.')
  const lastProp = props.pop()
  const target = props.reduce((current, prop) => {
    if (typeof current[prop] !== 'object' || current[prop] === null) {
      current[prop] = {}
    }

    return current[prop]
  }, object)

  target[lastProp] = value

  return object
}

class WebStore {

  constructor(storageKey = 'ohnemaus') {
    this.storageKey = storageKey
  }

  get data() {
    try {
      return JSON.parse(window.localStorage.getItem(this.storageKey)) || {}
    } catch (err) {
      return {}
    }
  }

  set data(value) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(value))
  }

  get(key, defaultValue = undefined) {
    const value = getNested(this.data, key)
    return typeof value === 'undefined' ? defaultValue : value
  }

  set(key, value) {
    this.data = setNested(this.data, key, value)
  }

  delete(key) {
    const data = this.data
    const props = key.split('.')
    const lastProp = props.pop()
    const target = props.reduce((current, prop) => (current ? current[prop] : undefined), data)

    if (target) {
      delete target[lastProp]
    }

    this.data = data
  }

  clear() {
    window.localStorage.removeItem(this.storageKey)
  }

}

function createStore() {
  if (isWebTarget) {
    return new WebStore()
  }

  // eslint-disable-next-line global-require
  const ElectronStore = require('electron-store')
  // eslint-disable-next-line global-require
  const electronModule = require('electron')

  const electron = process.type === 'browser' ? electronModule : require('@electron/remote') // eslint-disable-line global-require

  return new ElectronStore({
    projectVersion: electron.app.getVersion(),
    migrations: {
      '1.0.0': store => {
        store.clear()
      },
      '1.1.0': store => {
        store.set('shortcut', ['Meta', 'Shift', 'm'])
      },
    },
  })
}

export default createStore()
