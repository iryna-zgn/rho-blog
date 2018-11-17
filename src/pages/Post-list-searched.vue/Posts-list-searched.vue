<template>
  <div
    class="posts-list">
    <blog-preview-posts
      :posts="posts"/>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogPostsListSearched',
  components: {
    BlogPreviewPosts
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      searchedPosts: 'posts/getSearchedPosts'
    }),
    posts () {
      return this.searchedPosts.part
    },
    count () {
      return this.searchedPosts.count
    }
  },
  created () {
    this.loadPosts(this.SearchingStr)
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
