<template>
  <div>
    <div class="post">
      <post-title
        :title="post.title"/>
      <post-tags
        :tags="post.tags"/>
      <div
        v-for="(item, galleryIndex) in post.gallery"
        :key="galleryIndex"
        class="post__gallery-item">
        <h2
          v-if="item.title"
          class="t2 post__gallery-title">
          {{ item.title }}
        </h2>
        <ul
          v-if="item.list"
          class="post__gallery-list">
          <li
            v-for="(item, index) in item.list"
            :key="index">
            {{ item }}
          </li>
        </ul>
        <div
          v-if="item.images"
          :class="['post__img',{
            'u-50 u-spaced': item.images.length === 2,
            'u-33 u-spaced': item.images.length >= 3
        }]">
          <div
            v-for="(img, imgIndex) in item.images"
            :key="imgIndex"
            :class="['post__img-item',
                     {
                       'u-stretched': galleryIndex === 0 && item.images.length === 1
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
            <img
              :src="img.img"
              alt="">
          </div>
          <div
            v-if="item.galleryCapture"
            class="post__img-capture">
            {{ item.galleryCapture }}
          </div>
        </div>
        <post-quoter
          :quote="item.quote"
          :author="item.quoteAuthor"/>
        <post-text
          :text="item.text"/>
        <post-footnote
          :footnote="item.footnote "/>
      </div>
    </div>
  </div>
</template>

<script>
import PostTitle from './../../components/post/title/Title'
import PostTags from './../../components/post/tags/Tags'
import PostText from './../../components/post/text/Text'
import PostQuoter from './../../components/post/quoter/Quoter'
import PostFootnote from './../../components/post/footnote/Footnote'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Post',
  components: {
    PostTitle,
    PostTags,
    PostText,
    PostQuoter,
    PostFootnote
  },
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
