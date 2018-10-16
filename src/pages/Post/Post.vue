<template>
  <div>
    <div class="post">
      <h2 class="t2 post__title">
        {{ post.title }}
      </h2>
      <div class="post__tags">
        <span
          v-for="(tag, index) in post.tags"
          :key="index"
          class="post__tag">
          #{{ tag }}
        </span>
      </div>
      <div
        :class="['post__img', post.gallery ? 'post__img--link' : '']">
        <img
          :src="post.img"
          alt=""
          @click="setGallery(post.gallery)">
      </div>
      <div
        v-html="post.text"
        class="post__text">
        {{ post.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Post',
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
  methods: {
    ...mapActions({
      setGallery: 'posts/setGallery'
    })
  }
}
</script>
