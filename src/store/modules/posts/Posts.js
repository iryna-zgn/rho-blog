import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    posts: [],
    tags: []
  },
  getters: {
    getPosts: state => state.posts.slice(1),
    getLastPost: state => state.posts[0],
    getTags: state => state.tags
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
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, posts) {
      const tagsSet = new Set()

      posts.forEach(e => tagsSet.add(e.tag))
      state.tags = [...tagsSet]
      state.posts = posts
    }
  }
}
