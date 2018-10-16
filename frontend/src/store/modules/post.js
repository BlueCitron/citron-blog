import moment from 'moment'
import postAPI from '../../api/post'

export const namespaced = true

export const state = {
  posts: [],
  latestPosts: [],
  pageInfo: {
    currentPage: 1,
    perPage: 9,
  }
}

export const getters = {
  getPosts: state => {
    return state.posts.map(post => {
      return {
        ...post,
        category: post.category.name,
        createdBy: post.createdBy.nickname,
        createdAt: moment(post.createdAt).format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment(post.updatedAt).format('YYYY-MM-DD HH:mm:ss') }
    })
  },
  getPostsWithPaging: (state, getters) => {
    const cur = state.pageInfo.currentPage,
          per = state.pageInfo.perPage,
          total = state.posts.length
    return getters.getPosts.slice((cur - 1) * per, (cur * per) > total ? total : (cur * per))
  },
  getPostById: state => post_id => { return state.posts.find( post => post._id == post_id )},
  getTotalCount: state => { return state.posts.length },
  getPageInfo: state => {
    return state.pageInfo
  },
  getLatestPosts: state => {
    //const length = state.latestPosts.length
    return state.latestPosts.slice(0, 9).filter(post => post.category.name != '공지사항')
  },
  getNotices: state => { return state.posts.filter(post => post.category.name == '공지사항')}
}

export const actions = {
  async latestPosts ({ commit }) {
    let { data } = await postAPI.latest()
    commit('setLatestPosts', data)
  },
  async refresh({ commit }, category_id) {
    let { data } = await postAPI.fetch(category_id)
    commit('setPosts', data)
  },
  async write({ dispatch, rootGetters }, post) {
    // 필수 필드 및 선택 필드
    // { category, title, content(선택), createdBy, }
    const createdBy = rootGetters['user/getUserInfo']._id
    post = { createdBy,  ...post}
    let { data } = await postAPI.write(post)
    if(data == 'success..'){
      // 홈 화면으로 이동
      rootGetters.getMainInstance.$router.push('/')
    }
  },
  async deletePost({ dispatch }, post_id) {
    let { data } = await postAPI.delete(post_id)
    dispatch('refresh')
  },
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts;
  },
  setLatestPosts (state, latestPosts) {
    state.latestPosts = latestPosts
  },
  setPerPage (state, perPage) {
    state.pageInfo.perPage = perPage
  },
  initPageInfo (state) {
    state.pageInfo = {
      currentPage: 1,
      perPage: 8,
    }
  }
}
