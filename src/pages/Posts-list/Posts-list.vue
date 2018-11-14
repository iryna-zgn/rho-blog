<template>
  <div
    class="posts-list">
    <blog-last-post
      v-if="lastPost"
      :post="lastPost"/>
    <template
      v-if="posts.length > 0">
      <blog-preview-posts
        :posts="posts"/>
      <div class="u-center">
        <blog-more-link
          :text="'Завантажити ще'"
          @click="partPosts"/>
      </div>
    </template>
  </div>
</template>

<script>
import BlogLastPost from './../../components/last-post/Last-post'
import BlogPreviewPosts from './../../components/preview-posts/Preview-posts'
import BlogMoreLink from './../../components/more-link/More-link.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'BlogPostsList',
  components: {
    BlogLastPost,
    BlogPreviewPosts,
    BlogMoreLink
  },
  data () {
    return {
      page: 0,
      perPage: 2
    }
  },
  computed: {
    ...mapGetters({
      lastPost: 'posts/getLastPost',
      remainingPosts: 'posts/getRemainingPosts'
    }),
    posts () {
      return this.partPosts()
    }
  },
  created () {
    this.partPosts()
    window.addEventListener('scroll', () => {
      if (this.bottomVisible()) {
        this.partPosts()
      }
    })
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    partPosts () {
      // const from = this.page * this.perPage
      const to = (this.page + 1) * this.perPage
      const part = this.remainingPosts.slice(0, to)
      this.page++
      return part
      // this.posts.push(...part)
    }
  }
}
</script>
