<template>
  <div
    class="post-preview-big">
    <post-title
      :title="post.title"
      is-link
      @click.native="goToPost(post.rout)"/>
    <post-tags
      :tags="post.tags"/>
    <post-preview
      :preview="post.prevImgBig"
      :map="post.map"
      @click.native="goToPost(post.rout)"/>
    <post-description
      :description="post.description"/>
    <blog-more-link
      :text="'Читати'"
      @click.native="goToPost(post.rout)"/>
  </div>
</template>

<script>
import PostTitle from './../../components/post/title/Title'
import PostTags from './../../components/post/tags/Tags'
import PostPreview from './../../components/post/gallery/Preview'
import PostDescription from './../../components/post/description/Description'
import BlogMoreLink from './../more-link/More-link.vue'
export default {
  name: 'PreviewPostBig',
  components: {
    PostTags,
    PostTitle,
    PostPreview,
    PostDescription,
    BlogMoreLink
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    goToPost (rout) {
      this.$router.push({ name: 'post', params: { rout } })
    }
  }
}
</script>
