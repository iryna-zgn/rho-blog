<template>
  <div
    class="post-prev">
    <div class="post-prev__const">
      <div
        :style="{backgroundImage: `url(${post.prevImg})`}"
        class="post-prev__img"
        @click="goToPost(post.rout)">
        <img
          src="https://iryna-zgn.github.io/rho.blog/static/posts/images/dummy_300x200.png"
          alt=""
          class="post-prev__dummy-img">
      </div>
    </div>
    <div class="post-prev__var">
      <h3 class="t2 post-prev__title">
        <span
          class="post-prev__title-link"
          @click="goToPost(post.rout)">
          {{ post.title }}
        </span>
      </h3>
      <div class="post-prev__tags">
        <span
          v-for="(tag, index) in post.tags"
          :key="index"
          class="post__tag">
          #{{ t(tag) }}
        </span>
      </div>
      <p
        class="post-prev__desc">
        {{ post.description }}
      </p>
      <blog-more-link
        :text="'Читати...'"
        @click.native="goToPost(post.rout)"/>
    </div>
  </div>
</template>

<script>
import BlogMoreLink from './../more-link/More-link.vue'
import tagsTranslate from './../../mixins/tagsTranslate'
export default {
  name: 'PreviewPostSmall',
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
