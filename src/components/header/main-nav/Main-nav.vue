<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <li
        class="main-nav__item">
        <a href="#" class="main-nav__link">
          about me
        </a>
      </li>
      <li
        v-for="(tag, index) in tags"
        :key="index"
        class="main-nav__item">
        <a href="#" class="main-nav__link">
          #{{ tag }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogNav',
  computed: {
    ...mapGetters({
      tags: 'posts/getTags'
    })
  }
}
</script>
