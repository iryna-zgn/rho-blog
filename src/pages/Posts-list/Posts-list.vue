<template>
  <div
    class="posts-list">
    <blog-search
      v-model="searchingStr"
      @input="test"/>
    <blog-preview-posts
      v-if="posts.length > 0"
      :posts="posts"
      has-big-prev/>
    <div
      v-if="posts.length < count"
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
      searchingStr: ''
    }
  },
  computed: {
    ...mapGetters({
      homePosts: 'posts/getHomePost'
    }),
    posts () {
      return this.homePosts.part
    },
    count () {
      return this.homePosts.count
    },
    searchedPosts () {
      return this.posts.filter(item => {
        return item.title.toLowerCase().includes(this.searchingStr.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions({
      loadMorePosts: 'posts/loadMorePosts'
    }),
    test () {
      console.log(this.searchingStr)
    }
  }
}
</script>
