<template>
  <div
    class="posts-list">
    <blog-search
      v-model="searchingStr"
      :is-error="!hasSearched && searchingStr.length > char"
      @input="searchPosts(searchingStr)"/>
    <blog-preview-posts
      v-if="posts.length > 0"
      :posts="posts"
      :has-big-prev="!hasSearched"/>
    <div
      v-if="posts.length < count && !hasSearched"
      class="u-center">
      <blog-more-link
        :text="'Завантажити ще'"
        @click.native="loadMorePosts({
          from: 'home',
          offset: posts.length})"/>
    </div>
  </div>
</template>

<script>
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import BlogMoreLink from './../../components/more-link/More-link.vue'
import BlogSearch from './../../ui/search/Search.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPreviewPosts,
    BlogSearch,
    BlogMoreLink
  },
  data () {
    return {
      searchingStr: '',
      char: 2
    }
  },
  computed: {
    ...mapGetters({
      homePosts: 'posts/getHomePost'
    }),
    hasSearched () {
      return this.homePosts.searched.length > 0 && this.searchingStr.length > this.char
    },
    posts () {
      return this.hasSearched ? this.homePosts.searched : this.homePosts.part
    },
    count () {
      return this.homePosts.count
    }
  },
  methods: {
    ...mapActions({
      loadMorePosts: 'posts/loadMorePosts',
      searchPosts: 'posts/searchPosts'
    })
  }
}
</script>
