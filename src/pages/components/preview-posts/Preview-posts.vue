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
          <a href="#"
            :style="{backgroundImage: `url(${post.prevImg})`}"
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
          <div class="post-prev__tags">
            <span
              v-for="(tag, index) in post.tags"
              :key="index"
              class="post__tag">
              #{{ tag }}
            </span>
          </div>
          <p
            v-html="post.description"
            class="post-prev__desc">
            {{ post.description }}
          </p>
          <a href="#"
            class="more-link"
            @click.prevent="goToPost(post.rout)">
              Continue reading...
          </a>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RemainingPosts',
  props: {
    posts: {
      type: Array,
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
