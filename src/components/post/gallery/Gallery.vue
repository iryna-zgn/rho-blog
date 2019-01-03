<template>
  <div
    v-if="images"
    v-masonry transition-duration="0.3s" item-selector=".post-gallery__item"
    :class="['post-gallery',{
      'u-50 u-spaced': images.length === 2,
      'u-33 u-spaced': images.length >= 3
  }]">
    <div
      v-masonry-tile
      v-for="(img, imgIndex) in images"
      :key="imgIndex"
      :class="['post-gallery__item',
               {
                 'u-stretched': galleryIndex === 0 &&
                   images.length === 1
               }
      ]"
      @click="setGallery({
        gallery,
        galleryIndex,
        imgIndex
    })">
      <div
        v-if="map && galleryIndex===0 && images.length === 1"
        class="post-gallery__map">
        <img
          :src="map"
          alt="">
      </div>
      <img
        :src="img.img"
        alt="">
    </div>
    <div
      v-if="capture"
      class="post-gallery__capture">
      {{ capture }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PostGallery',
  props: {
    images: {
      type: Array,
      default: null
    },
    gallery: {
      type: Array,
      default: null
    },
    galleryIndex: {
      type: Number,
      default: null
    },
    map: {
      type: String,
      default: null
    },
    capture: {
      type: String,
      default: null
    }
  },
  methods: {
    ...mapActions({
      setGallery: 'posts/setGallery'
    })
  }
}
</script>
