<template>
  <div
    class="posts-list">
    <blog-preview-posts
      :posts="getFilteredPosts"/>
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
      getFilteredPosts: 'posts/getFilteredPosts'
    })
  }
}
</script>
