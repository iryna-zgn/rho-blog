<template>
  <div 
    v-if="post"
    class="post">
    <post-title
      :title="post.title"/>
    <post-tags
      :tags="post.tags"/>
    <div
      v-for="(item, galleryIndex) in post.gallery"
      :key="galleryIndex"
      class="post__part">
      <post-subtitle
        :subtitle="item.title"/>
      <post-list
        :list="item.list"/>
      <post-gallery
        :images="item.images"
        :gallery="post.gallery"
        :gallery-index="galleryIndex"
        :map="post.map"
        :capture="item.galleryCapture"/>
      <blog-quoter
        :quote="item.quote"
        :author="item.quoteAuthor"/>
      <post-text
        :text="item.text"/>
    </div>
    <post-footnotes
      :footnotes="post.footnotes"/>
  </div>
</template>

<script>
import PostTitle from './../../components/post/title/Title'
import PostSubtitle from './../../components/post/subtitle/Subtitle'
import PostTags from './../../components/post/tags/Tags'
import PostGallery from './../../components/post/gallery/Gallery'
import PostText from './../../components/post/text/Text'
import PostList from './../../components/post/list/List'
import PostFootnotes from './../../components/post/footnotes/Footnotes'
import BlogQuoter from './../../components/quoter/Quoter'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Post',
  components: {
    PostTitle,
    PostSubtitle,
    PostTags,
    PostGallery,
    PostText,
    PostList,
    PostFootnotes,
    BlogQuoter
  },
  data () {
    return {
      rout: this.$route.params.rout
    }
  },
  computed: {
    ...mapGetters({
      post: 'posts/getCurrentPost'
    })
  },
  created () {
    this.loadPosts(this.rout)
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
