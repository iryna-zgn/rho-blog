<template>
  <div
    v-if="footnote"
    class="post-footnote">
    {{ footnote}}
  </div>
</template>

<script>
export default {
  name: "PostFootnote",
  props: {
    footnote: {
      type: String,
      default: null
    }
  }
}
</script>
