<template>
  <div
    class="more-link">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'MoreLink',
  props: {
    text: {
      type: String,
      default: 'Далі...'
    }
  }
}
</script>
