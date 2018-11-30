<template>
  <div
    v-if="text"
    v-html="text"/>
</template>

<script>
export default {
  name: 'PostText',
  props: {
    text: {
      type: String,
      default: null
    }
  }
}
</script>
