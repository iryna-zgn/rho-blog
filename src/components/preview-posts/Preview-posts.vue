<template>
  <div>
    <transition-group
      name="fade"
      mode="out-in">
      <template
        v-for="(post, index) in posts">
        <template
          v-if="index === 0 && hasBigPrev">
          <preview-post-big
            :post="post"
            :key="index"/>
        </template>
        <template
          v-else>
          <preview-post-small
            :post="post"
            :key="index"/>
        </template>
      </template>
    </transition-group>
  </div>
</template>

<script>
import previewPostBig from './../preview-post-big/Preview-post-big'
import previewPostSmall from './../preview-post-small/Preview-post-small'
import BlogMoreLink from './../more-link/More-link.vue'
export default {
  name: 'PreviewPosts',
  components: {
    BlogMoreLink,
    previewPostBig,
    previewPostSmall
  },
  props: {
    posts: {
      type: Array,
      default: null
    },
    hasBigPrev: {
      type: Boolean,
      default: false
    }
  }
}
</script>
