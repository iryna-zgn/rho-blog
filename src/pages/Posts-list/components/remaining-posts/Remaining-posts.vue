<template>
  <div>
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="post-prev">
      <div class="post-prev__const">
        <a href="#"
          :style="{backgroundImage: `url(${post.img})`}"
          class="post-prev__img"
          @click.prevent="goToPost(post.rout)">
          <img src="/static/posts/images/dummy_300x200.png"
            alt=""
            class="post-prev__dummy-img">
        </a>
      </div>
      <div class="post-prev__var">
        <h3 class="t2 post-prev__title">
          <a href="#"
              @click.prevent="goToPost(post.rout)">
            {{ post.title }}
          </a>
        </h3>
        <div class="post-prev__tag">
          #{{ post.tag }}
        </div>
        <p class="post-prev__desc">
          {{ post.text }}
        </p>
        <a href="#"
          class="more-link"
          @click.prevent="goToPost(post.rout)">
            Continue reading...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemainingPosts',
  props: {
    posts: {
      type: Array,
      default: null
    }
  },
  methods:{
    goToPost(rout) {
      this.$router.push({name:'post', params: {rout}})
    }
  }
}
</script>
