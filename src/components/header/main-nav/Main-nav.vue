<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <li
        class="main-nav__item">
        <span class="main-nav__link"
          @click.prevent="goToAbout">
          про мене
        </span>
      </li>
      <li
        v-for="(tag, index) in tagsInfo"
        :key="index"
        class="main-nav__item"
        :class="{ 'is-active': tag.isActive }">
        <span
          class="main-nav__link"
          @click.prevent="filterPosts(tag.tag)">
          #{{ tag.tag }}
        </span>
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
      setFilteringTag: 'posts/setFilteringTag',
      disableActiveTag: 'posts/disableActiveTag'
    }),
    filterPosts (tag) {
      this.$router.push({name:'posts', params: {tag}})
      this.setFilteringTag(tag)
    },
    goToAbout () {
      this.$router.push({name: 'about'})
      this.disableActiveTag()
    }
  }
}
</script>
