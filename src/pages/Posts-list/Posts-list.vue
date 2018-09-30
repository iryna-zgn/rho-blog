<template>
  <div
    v-if="posts.length > 0"
    class="posts-list">
    <blog-last-post
      :post="lastPost"/>
    <blog-remining-posts
      :posts="remainingPosts"/>
  </div>
</template>

<script>
import BlogLastPost from './components/last-post/Last-post'
import BlogReminingPosts from './components/remaining-posts/Remaining-posts'
import { mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogReminingPosts
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
