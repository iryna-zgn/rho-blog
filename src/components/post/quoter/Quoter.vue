<template>
  <div
    v-if="quote"
    class="post-quote">
    {{ quote }}
    <div>
      {{ author }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostQuoter',
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
