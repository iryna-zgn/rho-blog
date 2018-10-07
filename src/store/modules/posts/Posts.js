import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    posts: [],
    currentPost: {},
    filteredPosts: [],
    tagsInfo: []
  },
  getters: {
    getPosts: state => state.posts,
    getLastPost: state => state.posts[0],
    getRemainingPosts: state => state.posts.slice(1),
    getTagsInfo: state => state.tagsInfo,
    getCurrentPost: state => state.currentPost,
    getFilteredPosts: state => state.filteredPosts
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
    },
    setFilteringTag ({commit}, tag) {
      commit(types.SET_FILTERING_TAG, tag)
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, posts) {
      posts.forEach(function (e) {
        const tagsSet = new Set()
        const tags = e.tags.split(', ')
        tags.forEach(e => tagsSet.add(e))
        e.tags = [...tagsSet]
        e.text = `<p>${e.text.replace(/\/n/ig, '</p><p>')}</p>`
      })
      state.posts = posts

      const tagsMap = new Map()
      posts.forEach(e => {
        e.tags.forEach(e => {
          tagsMap.set(e, {
            tag: e,
            postsCount: 0,
            isActive: false
          })
        })
      })
      const tags = [...tagsMap.keys()]
      tags.forEach(e => {
        const tag = e
        const count = posts.filter(e => e.tags.some(e => e === tag)).length
        tagsMap.get(tag).postsCount = count
      })
      state.tagsInfo = [...tagsMap.values()]

      const path = window.location.pathname.split('/')[2]
      state.currentPost = posts.filter(e => e.rout === path)[0]
      state.filteredPosts = posts.filter(e => e.tags.some(e => e === path))
      state.tagsInfo
        .filter(e => e.tag === path)
        .forEach(e => e.isActive = true)
    },
    [types.SET_CURRENT_POST] (state, rout) {
      state.currentPost = state.posts.filter(e => e.rout === rout)[0]
    },
    [types.SET_FILTERING_TAG] (state, tag) {
      state.filteredPosts = state.posts.filter(e => e.tags.some(e => e === tag))
      state.tagsInfo
        .forEach(e => e.isActive = false)
      state.tagsInfo
        .filter(e => e.tag === tag)
        .forEach(e => e.isActive = true)
    }
  }
}
