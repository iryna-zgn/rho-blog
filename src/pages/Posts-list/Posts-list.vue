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
import BlogLastPost from './components/last-post/Last-post'
import BlogReminingPosts from './components/remaining-posts/Remaining-posts'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogReminingPosts
  },
  computed: {
    ...mapGetters({
      lastPost: 'posts/getLastPost',
      posts: 'posts/getPosts'
    })
  },
  created () {
    this.loadPosts()
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
