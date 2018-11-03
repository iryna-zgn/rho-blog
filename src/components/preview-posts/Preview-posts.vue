<template>
  <div>
    <transition-group
      name="togglePage"
      mode="out-in">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="post-prev">
        <div class="post-prev__const">
          <div
            :style="{backgroundImage: `url(${post.prevImg})`}"
            class="post-prev__img"
            @click="goToPost(post.rout)">
            <img src="/static/posts/images/dummy_300x200.png"
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
              #{{ tag }}
            </span>
          </div>
          <p
            class="post-prev__desc">
            {{ post.description }}
          </p>
          <span
            class="more-link"
            @click="goToPost(post.rout)">
              Continue reading...
          </span>
        </div>
      </div>
    </transition-group>
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
  methods: {
    goToPost(rout) {
      this.$router.push({name:'post', params: {rout}})
    }
  }
}
</script>
