<template>
  <div class="aside-wrapper">
    <div class="aside">
      <blog-header/>
      <blog-soc-links/>
      <blog-copyright/>
    </div>
  </div>
</template>

<script>
import BlogHeader from './../header/Header'
import BlogSocLinks from './../soc-links/Soc-links'
import BlogCopyright from './../../components/copyright/Copyright'
export default {
  name: 'BlogAside',
  components: {
    BlogHeader,
    BlogSocLinks,
    BlogCopyright
  }
}
</script>
