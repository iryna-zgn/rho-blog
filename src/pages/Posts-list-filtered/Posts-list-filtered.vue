<template>
  <div
    class="posts-list">
    <blog-preview-posts
      :posts="filteredPosts"/>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPreviewPosts
  },
  data () {
    return {
      tag: this.$route.params.tag
    }
  },
  computed: {
    ...mapGetters({
      filteredPosts: 'posts/getFilteredPosts'
    })
  },
  created () {
    this.loadPosts(this.tag)
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
