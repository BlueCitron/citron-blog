 import commentAPI from '../../api/comment'

export const namespaced = true

export const state = {
  comments: null
}

export const getters = {
  getComments: state => state.comments,
  getCommentsByPostId: state => post_id => { return state.comments.filter(comment => comment.postId == post_id) },
  getLatestComments: state => state.comments.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }).splice(0, 5)
  //getLatestComments: state => { return state.comments }
}

export const actions = {
  async refresh ({ commit, state }) {
    commit('setComments', await commentAPI.fetch())
  },
  async insertComment ({ dispatch, rootGetters }, { postId, content }) {
    const comment = {
      postId,
      content,
      createdBy: rootGetters['user/getUserInfo']._id,
      // isChild: false,
      // parent: null
    }
    let { data } = await commentAPI.insert(comment)
    dispatch('refresh')
    //return data.success

  },
  async deleteComment ({ dispatch }, { _id }) {
    let { data } = await commentAPI.delete(_id)
    dispatch('refresh')
  }
}

export const mutations = {
  setComments (state, { data }) {
    state.comments = data
  }
}
