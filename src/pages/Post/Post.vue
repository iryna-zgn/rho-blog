<template>
  <div class="post">
    <h2 class="t2 post__title">
      {{ post.title }}
    </h2>
    <div class="post__tag">
      #{{ post.tag }}
    </div>
    <div class="post__img">
      <img :src="post.img" alt="">
    </div>
    <div
      v-html="post.text"
      class="post__text">
      {{ post.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  }
}
</script>
