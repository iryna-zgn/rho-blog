import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    isShown: false
  },
  getters: {
    isShown: state => state.isShown
  },
  actions: {
    showPreloader ({ commit }) {
      commit(types.SHOW_PRELOADER)
    },
    hidePreloader ({ commit }) {
      commit(types.HIDE_PRELOADER)
    }
  },
  mutations: {
    [types.SHOW_PRELOADER] (state) {
      state.isShown = true
    },
    [types.HIDE_PRELOADER] (state) {
      state.isShown = false
    }
  }
}
