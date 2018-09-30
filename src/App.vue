<template>
  <div class="container main-wrapper" id="app">
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
</template>

<script>
import BlogAside from './components/aside/Aside'
export default {
  name: 'app',
  components: {
    BlogAside
  }
}
</script>

<style lang="sass">
@import './styles/styles'
</style>
