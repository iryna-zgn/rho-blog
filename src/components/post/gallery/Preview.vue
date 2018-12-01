<template>
  <div
    class="post-gallery">
    <div class="post-gallery__item u-stretched">
      <div
        v-if="map"
        class="post-gallery__map">
        <img
          :src="map"
          alt="">
      </div>
      <img
        :src="preview"
        alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    preview: {
      type: String,
      default: null
    },
    map: {
      type: String,
      default: null
    }
  }
}
</script>
