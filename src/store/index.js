import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './modules/posts/Posts'
import Preloader from './modules/preloader/Preloader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts: {
      ...Posts
    },
    preloader: {
      ...Preloader
    }
  }
})
