<template>
  <div class="logo">
    <router-link
      :to="{name: 'postsList'}"
      tag="div"
      class="logo__link">
      <span class="logo__main">rho</span>
      <span class="logo__text">blog</span>
    </router-link >
  </div>
</template>

<script>
export default {
  name: 'BlogLogo'
}
</script>
