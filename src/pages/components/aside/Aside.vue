<template>
  <div class="aside-wrapper">
    <div class="aside">
      <blog-header/>
      <blog-soc-links/>
    </div>
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
