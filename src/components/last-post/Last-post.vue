<template>
  <div
    class="post">
    <h1 class="t1 post__title">
      <span
        class="post__title-link"
        @click="goToPost(post.rout)">
        {{ post.title }}
      </span>
    </h1>
    <div class="post__tags">
      <span
        v-for="(tag, index) in post.tags"
        :key="index"
        class="post__tag">
        #{{ t(tag) }}
      </span>
    </div>
    <div
      class="post__img"
      @click="goToPost(post.rout)">
      <div class="post__img-item">
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
    <p
      class="post__desc">
      {{ post.description }}
    </p>
    <blog-more-link
      :text="'Читати...'"
      @click.native="goToPost(post.rout)"/>
  </div>
</template>

<script>
import BlogMoreLink from './../more-link/More-link.vue'
import tagsTranslate from './../../mixins/tagsTranslate'
export default {
  name: 'LastPost',
  components: {
    BlogMoreLink
  },
  mixins: [
    tagsTranslate
  ],
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
