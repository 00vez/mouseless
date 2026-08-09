import Vue from 'vue'
import Router from 'vue-router'
import AppsRoute from '@/components/AppsRoute'
import AppRoute from '@/components/AppRoute'
import SetsRoute from '@/components/SetsRoute'
import TestRoute from '@/components/TestRoute'

const isWebTarget = process.env.VUE_APP_TARGET === 'web'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'apps',
    component: AppsRoute,
  },
]

if (!isWebTarget) {
  // relies on active-win/IPC to detect the frontmost app, impossible in a browser
  // eslint-disable-next-line global-require
  const ShortcutsRoute = require('@/components/ShortcutsRoute').default

  routes.push({
    path: '/shortcuts',
    name: 'shortcuts',
    component: ShortcutsRoute,
  })
}

routes.push(
  {
    path: '/app/:appId',
    name: 'app',
    component: AppRoute,
    children: [
      {
        path: 'sets',
        name: 'app.sets',
        component: SetsRoute,
      },
      {
        path: 'sets/:setId',
        name: 'app.test',
        component: TestRoute,
      },
    ],
  },
  {
    path: '*',
    component: AppsRoute,
  },
)

export default new Router({
  mode: 'hash',
  routes,
})
