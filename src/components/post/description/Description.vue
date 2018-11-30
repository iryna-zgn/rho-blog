<template>
  <p
    v-if="description"
    class="post-description">
    {{ description }}
  </p>
</template>

<script>
export default {
  name: 'PostDescription',
  props: {
    description: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="css">
</style>
