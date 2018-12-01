<template>
  <h2
    v-if="subtitle"
    class="t2 post-subtitle">
    {{ subtitle }}
  </h2>
</template>

<script>
export default {
  name: 'PostSubtitle',
  props: {
    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>
