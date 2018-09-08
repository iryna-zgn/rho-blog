<template>
  <div class="main-wrapper" id="app">
    <div class="container main-wrapper__inner">
      <div class="main-wrapper__aside">
        <div class="main-wrapper__aside-inner">
          <blog-aside/>          
        </div>
      </div>
      <div class="main-wrapper__main">
        <blog-main/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogAside from './components/aside/Aside'
import BlogMain from './components/main/Main'
export default {
  name: 'app',
  components: {
    BlogAside,
    BlogMain
  }
}
</script>

<style lang="sass">
@import './styles/styles'
</style>
