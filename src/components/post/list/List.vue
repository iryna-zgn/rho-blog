<template>
  <ul
    v-if="list"
    class="post-list">
    <li
      v-for="(item, index) in list"
      :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    list: {
      type: Array,
      default: null
    }
  }
}
</script>
