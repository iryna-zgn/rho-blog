import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    posts: [],
    tags: [],
    currentPost: {}
  },
  getters: {
    getPosts: state => state.posts,
    getLastPost: state => state.posts[0],
    getRemainingPosts: state => state.posts.slice(1),
    getTags: state => state.tags,
    getCurrentPost: state => state.currentPost
  },
  actions: {
    loadPosts ({commit}) {
      function loadJSON (callback) {
        const xobj = new XMLHttpRequest()
        xobj.overrideMimeType('application/json')
        xobj.open('GET', '/static/posts/posts.json', true)
        xobj.onreadystatechange = function () {
          if (
            /* eslint-disable */
            xobj.readyState == 4 && xobj.status == '200'
            /* eslint-enable */
          ) {
            callback(xobj.responseText)
          }
        }
        xobj.send(null)
      }
      loadJSON(function (response) {
        const posts = JSON.parse(response)
        commit(types.LOAD_POSTS, posts)
        return posts
      })
    },
    setCurrentPost ({commit}, rout) {
      commit(types.SET_CURRENT_POST, rout)
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, posts) {
      const tagsSet = new Set()
      const re =/\/n/ig
      const path = window.location.pathname.split('/')[2]

      posts.forEach(e => {
        const tags = e.tags.split(', ')
        tags.forEach(e => tagsSet.add(e))
      })
      state.tags = [...tagsSet]

      posts.forEach(function (e) {
        e.text = `<p>${e.text.replace(re, '</p><p>')}</p>`
      })

      state.currentPost = posts.filter(e => e.rout === path)[0]

      state.posts = posts
    },
    [types.SET_CURRENT_POST] (state, rout) {
      state.currentPost = state.posts.filter(e => e.rout === rout)[0]
    }
  }
}
