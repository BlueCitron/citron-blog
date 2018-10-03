import moment from 'moment'
import axios from 'axios'
import userAPI from '../../api/user'

export const namespaced = true

export const state = {
  //userInfo: {a:'Hello'}
  userInfo: 'BlueCitron'
}

export const getters = {
  getUserInfo: state => { return state.userInfo },
  //getUser
}

export const actions = {
  async refresh ({ commit }) {
    let { data } = await userAPI.fetch()
    commit('setUserInfo', data)
  }
}

export const mutations = {
  setUserInfo (state, user) {
    state.userInfo = user
  }
}
