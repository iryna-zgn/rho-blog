<template>
  <div
    v-if="quote"
    class="quote">
    {{ quote }}
    <div
      class="quote__author">
      {{ author }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogQuoter',
  props: {
    quote: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    }
  }
}
</script>
