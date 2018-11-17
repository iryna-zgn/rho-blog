<template>
  <div>
    <div
      id="app"
      class="main-wrapper">
      <div class="container">
        <div class="main-wrapper__aside">
          <blog-aside/>
        </div>
        <div class="main-wrapper__main">
          <blog-search
            v-model="searchingStr"/>
          <transition
            name="fade"
            mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
      <footer class="footer">
        <blog-copyright/>
      </footer>
    </div>
    <blog-modals/>
  </div>
</template>

<script>
import BlogAside from './components/aside/Aside'
import BlogModals from './components/modals/Modals'
import BlogCopyright from './components/copyright/Copyright'
import BlogSearch from './ui/search/Search.vue'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    BlogAside,
    BlogModals,
    BlogCopyright,
    BlogSearch
  },
  data () {
    return {
      searchingStr: ''
    }
  },
  created () {
    this.loadPosts()
  },
  // computed: {
  //   searchedPosts () {
  //     return this.allPosts.filter(item => {
  //       return item.title.toLowerCase().includes(this.searchingStr.toLowerCase())
  //     })
  //   }
  // }
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>

<style lang="sass">
@import './styles/styles'
</style>
