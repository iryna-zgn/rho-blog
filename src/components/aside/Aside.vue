<template>
  <div class="aside">
    <blog-header/>
    <blog-footer/>
  </div>
</template>

<script>
import BlogHeader from './../header/Header'
import BlogFooter from './../footer/Footer'
export default {
  name: 'BlogAside',
  components: {
    BlogHeader,
    BlogFooter
  }
}
</script>
