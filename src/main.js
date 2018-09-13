// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VeeValidate, { events: 'blur' })
Vue.config.productionTip = false


import { store } from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
