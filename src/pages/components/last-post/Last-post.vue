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
    <div class="post__img">
      <a href="#"
        @click.prevent="goToPost(post.rout)">
        <span
          v-if="post.map"
          class="post__map">
          <img
            :src="post.map"
            alt="">
        </span>
        <img :src="post.mainImg" alt="">
      </a>
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
