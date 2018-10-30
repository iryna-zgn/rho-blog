<template>
  <div class="logo">
    <router-link
      :to="{name: 'postsList'}"
      class="logo__link">
      <img src="/static/logo.svg" alt="">
      <!-- <span class="logo__main">exp</span> -->
      <span class="logo__text">blog</span>
    </router-link >
  </div>
</template>

<script>
export default {
  name: 'BlogLogo'
}
</script>
