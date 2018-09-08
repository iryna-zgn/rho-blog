<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="main-nav__item">
        <a href="#" class="main-nav__link">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogNav',
  data () {
    return {
      items: ['about', 'travel', 'films', 'thinks']
    }
  }
}
</script>
