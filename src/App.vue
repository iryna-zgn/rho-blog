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
          <transition
            name="toggle-page"
            mode="out-in">
            <router-view
              :key="$route.path"/>
          </transition>
        </div>
      </div>
      <footer class="footer">
        <blog-copyright/>
      </footer>
    </div>
    <blog-modals/>
    <blog-preloader
      v-if="isPreloader"/>
  </div>
</template>

<script>
import BlogAside from './components/aside/Aside'
import BlogModals from './components/modals/Modals'
import BlogCopyright from './components/copyright/Copyright'
import BlogPreloader from './ui/preloader/Preloader'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    BlogAside,
    BlogModals,
    BlogCopyright,
    BlogPreloader
  },
  computed: {
    ...mapGetters({
      isPreloader: 'posts/isPreloader'
    })
  },
  created () {
    this.showPreloader()
    this.loadPosts()
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts',
      showPreloader: 'posts/showPreloader'
    })
  }
}
</script>

<style lang="sass">
@import './styles/styles'
</style>
