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
        v-for="(tag, index) in tagsInfo"
        :key="index"
        class="main-nav__item"
        :class="{ 'is-active': tag.isActive }">
        <a
          href="#"
          class="main-nav__link"
          @click.prevent="filterPosts(tag.tag)">
          #{{ tag.tag }}
        </a>
        <transition
          name="togglePage"
          mode="out-in">
          <span
            v-if="tag.isActive"
            class="main-nav__count">
            ({{ tag.postsCount }})
          </span>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'BlogNav',
  computed: {
    ...mapGetters({
      tagsInfo: 'posts/getTagsInfo'
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
