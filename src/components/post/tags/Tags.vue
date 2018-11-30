<template>
  <div
    v-if="tags"
    class="post-tags">
    <span
      v-for="(tag, index) in tags"
      :key="index"
      class="post-tag__item">
      #{{ t(tag) }}
    </span>
  </div>
</template>

<script>
import tagsTranslate from './../../../mixins/tagsTranslate'
export default {
  name: 'PostTags',
  mixins: [
    tagsTranslate
  ],
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
}
</script>
