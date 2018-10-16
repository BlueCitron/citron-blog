import utilAPI from '../../api/util'

export const namespaced = true

export const state = {
  viewedPosts: []
}

export const getters = {
  getViewedPosts: state => { return state.viewedPosts }
}

export const actions = {
  async view ({ state, commit }, post) {
    let viewedPost = state.viewedPosts.find(viewed => viewed._id == post._id)

    if (viewedPost == undefined) {
      commit('pushPost', post)
      const { _id } = post
      await utilAPI.viewPost(_id)
    }
  },

}

export const mutations = {
  pushPost (state, post) {
    state.viewedPosts.push(post)
  }
}
