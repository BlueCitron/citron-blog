import categoryAPI from '../../api/category'

export const namespaced = true

export const state = {
  categories: []
}

export const getters = {
  getCategories: state => { return state.categories },
  getCategoryNames: state => { return state.categories.map(category => category.name )},
  getCategoryNameById: state => category_id => {
    const { name } = state.categories.find(category => category._id == category_id)
    return name
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
  }
}

export const mutations = {
  setCategories (state, categories) {
    state.categories = categories
  }
}
