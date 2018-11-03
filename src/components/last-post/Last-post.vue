<template>
  <div
    class="post">
    <h1 class="t1 post__title">
      <span class="post__title-link"
        @click="goToPost(post.rout)">
        {{ post.title }}
      </span>
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
      @click="goToPost(post.rout)">
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
      class="post__desc">
      {{ post.description }}
    </p>
    <span
      class="more-link"
      @click="goToPost(post.rout)">
        Continue reading...
    </span>
  </div>
</template>

<script>
export default {
  name: 'LastPost',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    goToPost(rout) {
      this.$router.push({name:'post', params: {rout}})
    }
  }
}
</script>
