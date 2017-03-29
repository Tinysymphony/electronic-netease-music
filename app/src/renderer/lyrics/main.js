import Vue from 'vue'
import Resource from 'vue-resource'
import electron from 'electron'
import notification from '@src/notification'
import $ipc from '@src/IPC_CONSTANTS'
import Lyrics from './Lyrics'
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
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  ...Lyrics
}).$mount('#app')
