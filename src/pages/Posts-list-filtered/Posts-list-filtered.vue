<template>
  <div
    class="posts-list">
    <blog-preview-posts
      :posts="filteredPosts"/>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import { mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPreviewPosts
  },
  computed: {
    ...mapGetters({
      filteredPosts: 'posts/getFilteredPosts'
    })
  }
}
</script>
