<template>
  <header class="header">
    <blog-logo
      @click.native="goToHome"/>
    <blog-nav/>
  </header>
</template>

<script>
import BlogLogo from './logo/Logo'
import BlogNav from './main-nav/Main-nav'
export default {
  name: 'BlogHeader',
  components: {
    BlogLogo,
    BlogNav
  },
  methods: {
    goToHome () {
      this.$router.push({name: 'postsList'})
    }
  }
}
</script>
