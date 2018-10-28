<template>
  <div>
    <div
      id="app"
      :class="['main-wrapper', {'is-fixed': isBodyFix}]">
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
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      isBodyFix: 'posts/isBodyFix'
    })
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
