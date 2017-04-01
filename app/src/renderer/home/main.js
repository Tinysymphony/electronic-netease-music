import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import electron from 'electron'
import notification from '@src/notification'
import $ipc from '@src/IPC_CONSTANTS'
import App from './App'
import routes from './routes'

window.$n = notification;

Vue.use({
  // custom hook
  install(Vue) {
    Vue.prototype.$electron = electron
    Vue.prototype.$notification = notification
    Vue.prototype.$ipc = $ipc
    Vue.prototype.$noop = () => {}
  }
})

Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
