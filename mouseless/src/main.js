import Vue from 'vue'
import keyboardSymbol from 'keyboard-symbol'
import router from '@/router'
import DB from '@/services/DB'
import Store from '@/services/Store'
import CleanUp from '@/services/CleanUp'
import HealthCheck from '@/services/HealthCheck'
import Wrapper from '@/components/Wrapper'

Vue.config.productionTip = false
Vue.prototype.$db = DB

Vue.filter('key', value => keyboardSymbol(value === '/' ? '#' : value, 'mac'))

Vue.filter('uppercase', value => {
  const ignoredCharacters = ['ß']

  if (ignoredCharacters.includes(value)) {
    return value
  }

  return value.toUpperCase()
})

CleanUp.run()

document.body.classList.toggle('is-light', Store.get('theme', 'dark') === 'light')

if (process.env.NODE_ENV === 'development') {
  HealthCheck.run()
}

new Vue({
  router,
  render: h => h(Wrapper),
}).$mount('#app')
