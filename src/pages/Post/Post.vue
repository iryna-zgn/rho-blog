<template>
  <div
    v-if="post">
    <div class="post">
      <h1 class="t1 post__title">
        {{ post.title }}
      </h1>
      <div class="post__tags">
        <span
          v-for="(tag, index) in post.tags"
          :key="index"
          class="post__tag">
          #{{ t(tag) }}
        </span>
      </div>
      <div
        v-for="(item, galleryIndex) in post.gallery"
        :key="galleryIndex"
        class="post__gallery-item">
        <div
          :class="['post__img',
                   {
                     'u-50 u-spaced': item.images.length === 2,
                     'u-33 u-spaced': item.images.length >= 3
                   }
        ]">
          <div
            v-for="(img, imgIndex) in item.images"
            :key="imgIndex"
            :class="['post__img-item',
                     {
                       'u-stretched': galleryIndex === 0
                     }
            ]"
            @click="setGallery({
              gallery: post.gallery,
              galleryIndex: galleryIndex,
              imageIndex: imgIndex
          })">
            <div
              v-if="post.map && galleryIndex==0"
              class="post__map">
              <img
                :src="post.map"
                alt="">
            </div>
            <div class="space"/>
            <div class="progressive">
              <img
                v-progressive="img.img"
                :src="img.preview"
                class="preview" >
            </div>
          </div>
        </div>
        <div
          class="post__text"
          v-html="item.text"/>
      </div>
    </div>
  </div>
</template>

<script>
import tagsTranslate from './../../mixins/tagsTranslate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Post',
  mixins: [
    tagsTranslate
  ],
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
  created () {
    this.loadPosts(this.rout)
  },
  methods: {
    ...mapActions({
      setGallery: 'posts/setGallery',
      loadPosts: 'posts/loadPosts'
    })
  }
}
</script>
