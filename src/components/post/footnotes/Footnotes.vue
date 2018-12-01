<template>
  <div
    v-if="footnotes"
    class="post-footnotes">
    <div
      v-for="(footnote, index) in footnotes"
      :key="index"
      class="post-footnotes__item">
      {{ footnote }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostFootnotes',
  props: {
    footnotes: {
      type: Array,
      default: null
    }
  }
}
</script>
