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
      <post-quoter
        :quote="item.quote"
        :author="item.quoteAuthor"/>
      <post-text
        :text="item.text"/>
    </div>
    <post-footnotes
      :footnotes="post.footnotes"/>
    <template
      v-if="related.length">
      <div
        class="post__related">
        Читайте також
      </div>
      <template
        v-for="post in related">
        <preview-post-small
          :post="post"
          :key="post.rout"/>
      </template>
    </template>
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
import PostQuoter from './../../components/post/quoter/Quoter'
import PreviewPostSmall from './../../components/preview-post-small/Preview-post-small'
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
    PostQuoter,
    PreviewPostSmall
  },
  data () {
    return {
      rout: this.$route.params.rout
    }
  },
  computed: {
    ...mapGetters({
      currentPost: 'posts/getCurrentPost'
    }),
    post () {
      return this.currentPost.post
    },
    related () {
      return this.currentPost.related
    }
  },
  created () {
    this.showPreloader()
    this.loadPosts(this.rout)
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts',
      showPreloader: 'posts/showPreloader'
    })
  }
}
</script>
