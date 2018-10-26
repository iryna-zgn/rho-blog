<template>
  <div>
    <div class="main-wrapper" id="app">
      <div class="container">
        <div class="main-wrapper__aside">
          <blog-aside/>
        </div>
        <div class="main-wrapper__main">
          <transition
            name="togglePage"
            mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
      <blog-copyright/>
    </div>
    <blog-modals/>
  </div>
</template>

<script>
import BlogAside from './components/aside/Aside'
import BlogModals from './components/modals/Modals'
import BlogCopyright from './components/copyright/Copyright'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    BlogAside,
    BlogModals,
    BlogCopyright
  },
  created () {
    this.loadPosts()
  },
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
