<template>
  <ul
    v-if="isActive"
    class="soc-links">
    <li
      v-for="(item, index) in items"
      v-if="item.isActive"
      :key="index"
      class="soc-links__item">
      <a
        :href="item.url"
        :title="item.name"
        class="soc-links__link"
        target="_blank"
        rel="noopener">
        <span
          :class="['soc-links__icon', 'icon-'+ item.name]"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocLinks',
  data () {
    return {
      isActive: false,
      items: [
        {
          name: 'instagram',
          url: '#',
          isActive: false
        },
        {
          name: 'facebook',
          url: '#',
          isActive: false
        },
        {
          name: 'github',
          url: 'https://github.com/iryna-zgn',
          isActive: false
        }
      ]
    }
  }
}
</script>
