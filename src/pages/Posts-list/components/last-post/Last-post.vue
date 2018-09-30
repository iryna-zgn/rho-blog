<template>
  <div
    class="post">
    <h2 class="t2 post__title">
      <a href="#">
        {{ lastPost.title }}
      </a>
    </h2>
    <div class="post__tag">
      #{{ lastPost.tag }}
    </div>
    <div class="post__img">
      <a href="#">
        <img :src="lastPost.img" alt="">
      </a>
    </div>
    <p class="post__desc">
      {{ lastPost.text }}
    </p>
    <a href="#" class="more-link">Continue reading...</a>
  </div>
</template>

<script>
export default {
  name: 'LastPost',
  props: {
    lastPost: {
      type: Object,
      default: null
    }
  }
}
</script>
