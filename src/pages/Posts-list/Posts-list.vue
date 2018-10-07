<template>
  <div
    v-if="posts.length > 0"
    class="posts-list">
    <blog-last-post
      :post="lastPost"/>
    <blog-preview-posts
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
      posts: 'posts/getPosts',
      lastPost: 'posts/getLastPost',
      remainingPosts: 'posts/getRemainingPosts'
    })
  }
}
</script>
