<template>
  <div
    class="post">
    <h1 class="t1 post__title">
      <a href="#"
          @click.prevent="goToPost(post.rout)">
        {{ post.title }}
      </a>
    </h1>
    <div class="post__tags">
      <span
        v-for="(tag, index) in post.tags"
        :key="index"
        class="post__tag">
        #{{ tag }}
      </span>
    </div>
    <div
      class="post__img"
      @click.prevent="goToPost(post.rout)">
        <div class="post__img-item">
          <div
            v-if="post.map"
            class="post__map">
            <img
              :src="post.map"
              alt="">
          </div>
          <img :src="post.mainImg" alt="">
        </div>
    </div>
    <p
      v-html="post.description"
      class="post__desc">
      {{ post.description }}
    </p>
    <a href="#"
      class="more-link"
      @click.prevent="goToPost(post.rout)">
        Continue reading...
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LastPost',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions({
      setCurrentPost: 'posts/setCurrentPost'
    }),
    goToPost(rout) {
      this.$router.push({name:'post', params: {rout}})
      this.setCurrentPost(rout)
    }
  }
}
</script>
