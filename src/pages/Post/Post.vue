<template>
  <div>
    <div class="post">
      <h1 class="t1 post__title">
        {{ post.title }}
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
        v-for="(item, galleryIndex) in post.gallery"
        :key="galleryIndex"
        class="post__gallery-item">
        <div
          class="post__img">
          <div
            v-if="post.map && galleryIndex==0"
            class="post__map">
            <img
              :src="post.map"
              alt="">
          </div>
          <img
            v-for="(img, imgIndex) in item.images"
            :key="imgIndex"
            :src="img.img"
            alt=""
            :class="{'u-50': item.images.length === 2 || item.images.length > 3,
                      'u-33': item.images.length === 3}"
            @click="setGallery([post.gallery, galleryIndex, imgIndex])">
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
