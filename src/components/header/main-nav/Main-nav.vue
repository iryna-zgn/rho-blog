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
        <a
          href="#"
          class="main-nav__link"
          @click.prevent="filterPosts(tag)">
          #{{ tag }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogNav',
  data () {
    return {
      activeClass: 'is-active'
    }
  },
  computed: {
    ...mapGetters({
      tags: 'posts/getTags'
    })
  },
  methods: {
    ...mapActions({
      setFilteringTag: 'posts/setFilteringTag'
    }),
    filterPosts (tag) {
      this.$router.push({name:'posts', params: {tag}})
      this.setFilteringTag(tag)
    }
  }
}
</script>
