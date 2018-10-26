<template>
  <div class="copyright">
    © {{ currentYear }}
  </div>
</template>

<script>
export default {
  name: 'BlogCopyright',
  computed: {
    currentYear () {
      return (new Date()).getFullYear()
    }
  }
}
</script>
