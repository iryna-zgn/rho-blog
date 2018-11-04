import * as types from './mutation-types'
import * as paths from './paths'
export default {
  namespaced: true,
  state: {
    posts: [],
    tagsTranslations: {},
    currentPost: {},
    filteredPosts: [],
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
    getTagsTranslations: state => state.tagsTranslations,
    getLastPost: state => state.posts[0],
    getRemainingPosts: state => state.posts.slice(1),
    getTagsInfo: state => state.tagsInfo,
    getCurrentPost: state => state.currentPost,
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

        post.mainImg = post.gallery
          .map(e => e.images)
          .reduce((a, b) => [...a, ...b], [])
          .filter(e => e.mainImg)[0].img

        post.gallery.forEach(e => {
          e.text = `<p>${e.text.replace(/\/n/ig, '</p><p>')}</p>`
        })
      })
      state.posts = posts
      state.filteredPosts = state.posts.filter(e => e.tags.some(e => e === param))
      state.currentPost = state.posts.filter(e => e.rout === param)[0]

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
    }
  }
}
