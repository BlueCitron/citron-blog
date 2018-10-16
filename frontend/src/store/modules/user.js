import userAPI from '../../api/user'

export const namespaced = true

export const state = {
  isSignedIn: false,
  accessToken: null,
  userInfo: {
    nickname: '',
    lastLogin: ''
  }
}

export const getters = {
  getUserInfo: state => { return state.userInfo },
  getAccessToken: state => { return state.accessToken },
  getSignedInState: state => { return state.isSignedIn }
}

export const actions = {
  async refresh ({ dispatch, state, rootGetters, commit }) {
    const token = rootGetters.getMainInstance.$cookie.get('accessToken')
    if (token) {
      state.accessToken = token
      state.isSignedIn = token ? true : false
      dispatch('verify', token)
    }
  },
  async auth ({ dispatch, commit, rootGetters }, authInfo) {
    const { account, password } = authInfo

    const onSuccess = (result) => {
      const { data } = result
      const { accessToken, refreshToken } = data

      // 쿠기에 저장
      rootGetters.getMainInstance.$cookie.set('accessToken', accessToken)
      rootGetters.getMainInstance.$cookie.set('refreshToken', refreshToken)

      // 로그인 상태 변경
      commit('setSignedInState', true)

      // verify
      dispatch('verify', accessToken)

      // 홈 화면으로 이동
      rootGetters.getMainInstance.$router.push('/')
    }

    const handleError = (error) => {
      console.log(error)
    }

    userAPI.auth(account, password)
      .then(onSuccess)
      .catch(handleError)

  },
  async verify ({ commit }, token) {
    let { data } = await userAPI.verify(token)
    let { user } = data
    commit('setUserInfo', user)
  },
  async signout ({ commit, rootGetters }) {
    // store 데이터 삭제
    commit('setSignedInState', false)
    commit('setUserInfo', null)

    // 쿠기 데이터 삭제
    rootGetters.getMainInstance.$cookie.delete('accessToken')
    rootGetters.getMainInstance.$cookie.delete('refreshToken')

    // 홈 화면으로 이동
    rootGetters.getMainInstance.$router.push('/')
  }
}

export const mutations = {
  setSignedInState (state, isSignedIn) { state.isSignedIn = isSignedIn },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
