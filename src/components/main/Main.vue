<template>
  <div class="main">
    <blog-posts-list/>
  </div>
</template>

<script>
import BlogPostsList from './../post/posts-list/Posts-list'
export default {
  name: 'BlogMain',
  components: {
    BlogPostsList
  }
}
</script>
