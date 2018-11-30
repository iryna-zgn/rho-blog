<template>
  <div
    class="post">
    <post-title
      :title="post.title"
      is-link
      @click.native="goToPost(post.rout)"/>
    <post-tags
      :tags="post.tags"/>
    <div
      class="post__img"
      @click="goToPost(post.rout)">
      <div class="post__img-item u-stretched">
        <div
          v-if="post.map"
          class="post__map">
          <img
            :src="post.map"
            alt="">
        </div>
        <img
          :src="post.prevImgBig"
          alt="">
      </div>
    </div>
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
import PostDescription from './../../components/post/description/Description'
import BlogMoreLink from './../more-link/More-link.vue'
export default {
  name: 'PreviewPostBig',
  components: {
    PostTags,
    PostTitle,
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
