<template>
  <div class="preloader">
    <div
      v-for="ball in 3"
      :key="ball"
      class="preloader__bounceball"/>
  </div>
</template>
<script>
export default {
  name: 'Preloader'
}
</script>
