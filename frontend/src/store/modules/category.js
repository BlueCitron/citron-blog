import categoryAPI from '../../api/category'

export const namespaced = true

export const state = {
  categories: []
}

export const getters = {
  getCategories: state => { return state.categories },
  getCategoryNames: state => { return state.categories.map(category => category.name )},
  getCategoryNameById: state => category_id => {
    const result = state.categories.find(category => category._id == category_id)
    return result == undefined ? '' : result.name
  },
  getCategoryIdByName: state => name => {
    if(state.categories.find(category => category.name == name)){
      const { _id } = state.categories.find(category => category.name == name)
      return _id
    }
  }
}

export const actions = {
  async refresh ({ commit }) {
    let { data } = await categoryAPI.fetch()
    commit('setCategories', data)
  },
  async insertCategory ({ dispatch, rootGetters  }, category_name) {
    // commit
    let category = {
      name: category_name,
      createdBy: rootGetters['user/getUserInfo']._id
    }

    let { data } = await categoryAPI.insert(category)
    // refresh
    dispatch('refresh')
  },
  async updateCategory ({ commit, dispatch  }, category) {
    // commit
    const { _id } = category
    let { data } = await categoryAPI.update(_id, category)
    // refresh
    dispatch('refresh')
  },
  async deleteCategory ({ commit, dispatch  }, category) {
    // commit
    const { _id } = category
    let { data } = await categoryAPI.delete(_id)
    // refresh
    dispatch('refresh')
  },
}

export const mutations = {
  setCategories (state, categories) {
    state.categories = categories
  },
}
