<template>
  <div>
    <div class="post">
      <div class="post__group">
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
      </div>
      <div
        v-for="(item, index) in post.gallery"
        :key="index"
        class="post__gallery-item">
        <div
          class="post__img">
          <div
            v-if="post.map && index==1"
            class="post__map">
            <img
              :src="post.map"
              alt="">
          </div>
          <img
            v-for="(img, index) in item.images"
            :key="index"
            :src="img.img"
            alt=""
            :class="{'u-50': item.images.length === 2 || item.images.length > 3,
                      'u-33': item.images.length === 3}"
            @click="setGallery(post.gallery)">
        </div>
        <div
          v-html="item.text"
          class="post__text">
          {{ item.text }}
        </div>
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
