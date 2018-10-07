<template>
  <div
    class="posts-list">
    <blog-last-post
      v-if="lastPost"
      :post="lastPost"/>
    <blog-preview-posts
      v-if="remainingPosts.length > 0"
      :posts="remainingPosts"/>
  </div>
</template>

<script>
import BlogLastPost from './../../components/last-post/Last-post'
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import { mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogPreviewPosts
  },
  computed: {
    ...mapGetters({
      lastPost: 'posts/getLastPost',
      remainingPosts: 'posts/getRemainingPosts'
    })
  }
}
</script>
