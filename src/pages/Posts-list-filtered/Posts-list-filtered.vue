<template>
  <div
    class="posts-list">
    <blog-preview-posts
      :posts="posts"/>
    <div
      v-if="posts.length < count"
      class="u-center">
      <blog-more-link
        :text="'Завантажити ще'"
        @click.native="loadMorePosts({
          from: 'filter',
          offset: posts.length})"/>
    </div>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import BlogMoreLink from './../../components/more-link/More-link.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPreviewPosts,
    BlogMoreLink
  },
  data () {
    return {
      tag: this.$route.params.tag
    }
  },
  computed: {
    ...mapGetters({
      filteredPosts: 'posts/getFilteredPosts'
    }),
    posts () {
      return this.filteredPosts.part
    },
    count () {
      return this.filteredPosts.count
    }
  },
  created () {
    this.loadPosts(this.tag)
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts',
      loadMorePosts: 'posts/loadMorePosts'
    })
  }
}
</script>
