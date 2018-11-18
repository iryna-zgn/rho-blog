import * as types from './mutation-types'
import * as paths from './paths'
export default {
  namespaced: true,
  state: {
    posts: [], // all posts
    filtered: [],
    homePosts: {
      part: [],
      count: 0,
      searched: []
    },
    filteredPosts: {
      part: [],
      count: 0
    },
    perPage: 3,
    currentPost: {},
    tagsTranslations: {},
    tagsInfo: [],
    galleryModal: {
      isShown: false,
      currentImg: {},
      gallery: [],
      currentIndex: null
    }
  },
  getters: {
    getPosts: state => state.posts,
    getHomePost: state => state.homePosts,
    getCurrentPost: state => state.currentPost,
    getTagsTranslations: state => state.tagsTranslations,
    getTagsInfo: state => state.tagsInfo,
    getFilteredPosts: state => state.filteredPosts,
    getCurrentGalleryImg: state => state.galleryModal.currentImg,
    isShownGallery: state => state.galleryModal.isShown
  },
  actions: {
    loadPosts ({ commit }, param) {
      fetch(paths.posts)
        .then(data => data.json())
        .then(data => commit(types.LOAD_POSTS, [data, param]))
    },
    loadTranslations ({ commit }) {
      fetch(paths.tagsTranslations)
        .then(data => data.json())
        .then(data => commit(types.LOAD_TAGS_TRANSLATIONS, data))
    },
    setGallery ({ commit }, galleryInfo) {
      commit(types.SET_GALLERY, galleryInfo)
    },
    closeModal ({ commit }, modalName) {
      commit(types.CLOSE_MODAL, modalName)
    },
    slideGalleryImg ({ commit }, arrow) {
      commit(types.SLIDE_GALLERY_IMG, arrow)
    },
    loadMorePosts ({ commit }, payload) {
      commit(types.LOAD_MORE_POSTS, payload)
    },
    searchPosts ({ commit }, str) {
      commit(types.SEARCH_POSTS, str)
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, data) {
      const [posts, param] = data

      posts.forEach(function (e) {
        const post = e
        const tagsSet = new Set()
        const tags = e.tags.split(', ')

        tags.forEach(e => tagsSet.add(e))
        post.tags = [...tagsSet]

        post.gallery.forEach(e => {
          e.text = `<p>${e.text.replace(/\/n/ig, '</p><p>')}</p>`
        })
      })
      state.posts = posts
      // for home page
      state.homePosts.part = state.posts.slice(0, state.perPage)
      state.homePosts.count = state.posts.length
      // for filtering page
      state.filtered = posts.filter(e => {
        return e.tags.some(e => e === param)
      })
      state.filteredPosts.part = state.filtered.slice(0, state.perPage)
      state.filteredPosts.count = state.filtered.length
      // for post page
      state.currentPost = posts.filter(e => e.rout === param)[0]

      const tagsMap = new Map()
      posts.forEach(e => {
        e.tags.forEach(e => {
          tagsMap.set(e, {
            tag: e,
            postsCount: 0
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
    },
    [types.LOAD_TAGS_TRANSLATIONS] (state, translations) {
      state.tagsTranslations = translations
    },
    [types.SET_GALLERY] (state, galleryInfo) {
      const { gallery, galleryIndex, imageIndex } = galleryInfo
      const currentImage = gallery[galleryIndex].images[imageIndex]

      state.galleryModal.currentImg = currentImage

      state.galleryModal.isShown = true
      document.querySelector('body').classList.add('is-fixed')

      state.galleryModal.gallery = gallery
        .map(e => e.images)
        .reduce((a, b) => [...a, ...b], [])
      state.galleryModal.currentIndex = state.galleryModal.gallery.findIndex(e => e === currentImage)
    },
    [types.SLIDE_GALLERY_IMG] (state, arrow) {
      const count = state.galleryModal.gallery.length
      const currentIndex = state.galleryModal.currentIndex
      let index

      if (arrow === 'next') {
        if (currentIndex === count - 1) {
          state.galleryModal.currentIndex = -1
        }
        index = ++state.galleryModal.currentIndex
      } else if (arrow === 'prev') {
        if (currentIndex === 0) {
          state.galleryModal.currentIndex = count
        }
        index = --state.galleryModal.currentIndex
      }

      state.galleryModal.currentImg = state.galleryModal.gallery[index]
    },
    [types.CLOSE_MODAL] (state, modalName) {
      state[modalName].isShown = false
      setTimeout(function () {
        document.querySelector('body').classList.remove('is-fixed')
      }, 200)
    },
    [types.LOAD_MORE_POSTS] (state, payload) {
      const { from, offset } = payload
      if (from === 'home') {
        const part = state.posts.slice(offset, offset + state.perPage)
        state.homePosts.part = [...state.homePosts.part, ...part]
      } else if (from === 'filter') {
        const part = state.filtered.slice(offset, offset + state.perPage)
        state.filteredPosts.part = [...state.filteredPosts.part, ...part]
      }
    },
    [types.SEARCH_POSTS] (state, str) {
      state.homePosts.searched = state.posts.filter(e => {
        return e.title.toLowerCase().includes(str.toLowerCase())
      }).slice(0, 5)
    }
  }
}
