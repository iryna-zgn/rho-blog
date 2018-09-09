import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    postsArr: []
  },
  getters: {
    posts: state => state.postsArr.slice(1),
    lastPost: state => state.postsArr[0]
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
        const postsArr = JSON.parse(response)
        commit(types.LOAD_POSTS, postsArr)
        return postsArr
      })
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, postsArr) {
      state.postsArr = postsArr
    }
  }
}
