import commentAPI from '../../api/comment'

export const namespaced = true

export const state = {
  comments: null
}

export const getters = {
  getComments: state => state.comments,
  getCommentsByPostId: state => post_id => { return state.comments.filter(comment => comment.postId == post_id) },
  getLatestComments: state => { return state.comments.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }).splice(0, 5)}
}

export const actions = {
  async refresh ({ commit, state }) {
    //const { data } = await commentAPI.fetch()
    //console.log('Result : ', data)
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
    console.log('Input : ', data)
    state.comments = data
    console.log('Check : ', state.comments)
  }
}
