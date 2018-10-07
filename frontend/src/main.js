import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCookie from 'vue-cookie'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content
import 'highlight.js/styles/github.css' // code block highlight

Vue.use(Vuetify)
Vue.use(VueCookie)
Vue.prototype.$http = axios
Vue.config.productionTip = false

const main = new Vue({
  render: h => h(App)
  , store
  , router
}).$mount('#app')

store.commit('setMainInstance', main)
store.dispatch('user/refresh')
