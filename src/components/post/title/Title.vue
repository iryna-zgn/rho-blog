<template>
  <h1
    v-if="title"
    :class="['t1 post-title', {'post-title--link': isLink}]">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'PostTitle',
  props: {
    title: {
      type: String,
      default: null
    },
    isLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>
