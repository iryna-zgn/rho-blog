<template>
  <div
    v-if="text"
    :class="['post-text', {'is-decorate': isDecorate}]"
    v-html="text"/>
</template>

<script>
export default {
  name: 'PostText',
  props: {
    text: {
      type: String,
      default: null
    },
    isDecorate: {
      type: Boolean,
      default: null
    }
  }
}
</script>
