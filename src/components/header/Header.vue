<template>
  <header class="header">
    <blog-logo/>
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
  }
}
</script>
