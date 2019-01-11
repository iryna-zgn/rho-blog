import * as types from './mutation-types'
import * as paths from './paths'
export default {
  namespaced: true,
  state: {
    posts: [], // all posts
    filtered: [],
    searchedPosts: [],
    homePosts: {
      part: [],
      count: 0
    },
    filteredPosts: {
      part: [],
      count: 0
    },
    perPage: 3,
    currentPost: {
      post: null,
      related: []
    },
    tagsTranslations: {},
    tagsInfo: [],
    galleryModal: {
      isShown: false,
      currentImg: {},
      gallery: [],
      currentIndex: null
    },
    isPreloader: false
  },
  getters: {
    getPosts: state => state.posts,
    getHomePost: state => state.homePosts,
    getCurrentPost: state => state.currentPost,
    getTagsTranslations: state => state.tagsTranslations,
    getTagsInfo: state => state.tagsInfo,
    getFilteredPosts: state => state.filteredPosts,
    getSearchedPosts: state => state.searchedPosts,
    getCurrentGalleryImg: state => state.galleryModal.currentImg,
    isShownGallery: state => state.galleryModal.isShown,
    isPreloader: state => state.isPreloader
  },
  actions: {
    loadPosts ({ commit }, param) {
      fetch(paths.posts)
        .then(data => data.json())
        .then(data => commit(types.LOAD_POSTS, [data, param]))
        .then(data => commit(types.HIDE_PRELOADER))
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
    },
    hidePreloader ({ commit }) {
      commit(types.HIDE_PRELOADER)
    },
    showPreloader ({ commit }) {
      commit(types.SHOW_PRELOADER)
    }
  },
  mutations: {
    [types.LOAD_POSTS] (state, data) {
      const [posts, param] = data

      posts.forEach(post => {
        post.tags = post.tags.split(', ')
        post.gallery
          .filter(e => e.text)
          .forEach(e => {
            e.text = `<p>${e.text.replace(/\/n/ig, '</p><p>')}</p>`
          })
      })
      state.posts = posts.filter(e => e.isActive)
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
      state.currentPost.post = posts.filter(e => e.rout === param)[0]
      if (state.currentPost.post) {
        state.currentPost.post.tags.forEach(e => {
          const tag = e
          state.currentPost.related =
            posts.filter(e => e.tags.includes(tag))
              .filter(e => e !== state.currentPost.post).slice(0, 2)
        })
      }

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
      state.tagsInfo.sort(function (a, b) {
        if (a.tag < b.tag) { return -1 }
        if (a.tag > b.tag) { return 1 }
        return 0
      })
    },
    [types.LOAD_TAGS_TRANSLATIONS] (state, translations) {
      state.tagsTranslations = translations
    },
    [types.SET_GALLERY] (state, galleryInfo) {
      const { gallery, galleryIndex, imgIndex } = galleryInfo
      const currentImage = gallery[galleryIndex].images[imgIndex]

      state.galleryModal.currentImg = currentImage

      state.galleryModal.isShown = true
      document.querySelector('body').classList.add('is-fixed')

      state.galleryModal.gallery = gallery
        .filter(e => e.images)
        .map(e => e.images)
        .reduce((a, b) => [...a, ...b], [])
      state.galleryModal.currentIndex = state.galleryModal.gallery
        .findIndex(e => e === currentImage)
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
      state.searchedPosts = state.posts.filter(e => {
        return e.title.toLowerCase().includes(str.trim().toLowerCase()) ||
                e.keyWords.toLowerCase().includes(str.trim().toLowerCase())
      }).slice(0, 10)
    },
    [types.HIDE_PRELOADER] (state) {
      setTimeout(() => {
        state.isPreloader = false
      }, 500)
    },
    [types.SHOW_PRELOADER] (state) {
      state.isPreloader = true
    }
  }
}
