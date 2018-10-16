import Vue from 'vue'
import Vuex from 'vuex'

import * as post from './modules/post'
import * as category from './modules/category'
import * as user from './modules/user'
import * as comment from './modules/comment'
import * as util from './modules/util'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { post, category, user, comment, util },
  state: { drawer: false, mainInstance: null, nowCategory: null },
  getters: {
    getDrawer: state => { return state.drawer },
    getMainInstance: state => { return state.mainInstance }
  },
  actions: {
    changeDrawer ({ commit }) {
      commit('changeDrawer')
    },
    moveHome ({ state }) {
      state.mainInstance.$router.push('/')
    },
    moveCategory ({ dispatch, state, commit }, category_id) {
      // post refresh
      // category set
      // url 이동
      commit('post/initPageInfo')
      commit('setNowCategory', category_id)
      const url = `/category/${category_id}`
      dispatch('post/refresh', category_id)
      state.mainInstance.$router.push(url)
    },
    movePost ({ state }, post_id) {
      const url = `/post/${post_id}`
      state.mainInstance.$router.push(url)
    }

  },
  mutations: {
    changeDrawer (state) {
      state.drawer = !state.drawer
    },
    setMainInstance (state, instance) {
      state.mainInstance = instance;
    },
    setNowCategory (state, category) {
      state.nowCategory = category
    }
  }

})
