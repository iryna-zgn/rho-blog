<template>
  <div class="aside">
    <blog-header/>
    <blog-soc-links/>
  </div>
</template>

<script>
import BlogHeader from './../header/Header'
import BlogSocLinks from './../soc-links/Soc-links'
export default {
  name: 'BlogAside',
  components: {
    BlogHeader,
    BlogSocLinks
  }
}
</script>
