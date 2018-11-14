<template>
  <div
    class="posts-list">
    <blog-last-post
      v-if="lastPost"
      :post="lastPost"/>
    <blog-preview-posts
      v-if="posts.length > 0"
      :posts="posts"/>
    <div
      v-if="posts.length"
      class="u-center">
      <blog-more-link
        :text="'Завантажити ще'"
        @click.native="loadMorePosts(posts.length)"/>
    </div>
  </div>
</template>

<script>
import BlogLastPost from './../../components/last-post/Last-post'
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import BlogMoreLink from './../../components/more-link/More-link.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogPreviewPosts,
    BlogMoreLink
  },
  computed: {
    ...mapGetters({
      lastPost: 'posts/getLastPost',
      posts: 'posts/getPartPosts',
      perPage: 'posts/getPerPage'
    })
  },
  methods: {
    ...mapActions({
      loadMorePosts: 'posts/loadMorePosts'
    })
  }
}
</script>
