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
    </div>
    <modals/>
  </div>
</template>

<script>
import BlogAside from './components/aside/Aside'
import Modals from './components/modals/Modals'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    BlogAside,
    Modals
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
