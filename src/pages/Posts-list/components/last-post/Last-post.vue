<template>
  <div
    class="post">
    <h2 class="t2 post__title">
      <a href="#"
          @click.prevent="goToPost(post.rout)">
        {{ post.title }}
      </a>
    </h2>
    <div class="post__tag">
      #{{ post.tag }}
    </div>
    <div class="post__img">
      <a href="#"
        @click.prevent="goToPost(post.rout)">
        <img :src="post.img" alt="">
      </a>
    </div>
    <div
      v-html="post.text"
      class="post__desc">
      {{ post.text }}
    </div>
    <a href="#"
      class="more-link"
      @click.prevent="goToPost(post.rout)">
        Continue reading...
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LastPost',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods:{
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
