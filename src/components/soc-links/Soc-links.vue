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
      isActive: true,
      items: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/dmytruk.i/',
          isActive: true
        },
        {
          name: 'facebook',
          url: '#',
          isActive: false
        },
        {
          name: 'github',
          url: '#',
          isActive: false
        }
      ]
    }
  }
}
</script>
