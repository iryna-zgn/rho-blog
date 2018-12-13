<template>
  <div
    class="posts-list">
    <blog-search
      v-model="searchingStr"
      :is-error="!hasSearched && searchingStr.length > char"
      @input="searchPosts(searchingStr)"/>
    <blog-preview-posts
      v-if="posts.length > 0"
      :posts="posts"/>
    <div
      v-if="posts.length < count && !hasSearched"
      class="u-center">
      <blog-more-link
        :text="'Показати більше'"
        @click.native="loadMorePosts({
          from: 'filter',
          offset: posts.length})"/>
    </div>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import BlogMoreLink from './../../components/more-link/More-link.vue'
import BlogSearch from './../../ui/search/Search.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPreviewPosts,
    BlogMoreLink,
    BlogSearch
  },
  data () {
    return {
      tag: this.$route.params.tag,
      searchingStr: '',
      char: 2
    }
  },
  computed: {
    ...mapGetters({
      filteredPosts: 'posts/getFilteredPosts',
      searchedPosts: 'posts/getSearchedPosts'
    }),
    hasSearched () {
      return this.searchedPosts.length > 0 && this.searchingStr.length > this.char
    },
    posts () {
      return this.hasSearched ? this.searchedPosts : this.filteredPosts.part
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
      loadMorePosts: 'posts/loadMorePosts',
      searchPosts: 'posts/searchPosts'
    })
  }
}
</script>
