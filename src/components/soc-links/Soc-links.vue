<template>
  <ul class="soc-links">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="soc-links__item">
      <a
        href="#"
        class="soc-links__link">
        <span
          :class="['soc-links__icon', 'icon-'+ item]"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocLinks',
  data () {
    return {
      items: ['instagram', 'facebook']
    }
  }
}
</script>
