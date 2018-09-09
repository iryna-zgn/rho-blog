<template>
  <div
    v-if="posts.length > 0"
    class="posts-list">
    <blog-last-post
      :last-post="lastPost"/>
    <blog-remining-posts
      :posts="posts"/>
  </div>
</template>

<script>
import BlogLastPost from './last-post/Last-post'
import BlogReminingPosts from './remaining-posts/Remaining-posts'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogReminingPosts
  },
  created () {
    this.loadPosts()
  },
  computed: {
    ...mapGetters({
      lastPost: 'posts/lastPost',
      posts: 'posts/posts'
    })
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
