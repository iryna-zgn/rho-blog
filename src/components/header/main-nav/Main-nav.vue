<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <router-link
        :to="{name: 'about'}"
        tag="li"
        class="main-nav__item">
        <span
          class="main-nav__link">
          про мене
        </span>
      </router-link>
      <router-link
        v-for="(tagInfo, index) in tagsInfo"
        :key="index"
        :to="{name: 'posts', params: {tag: tagInfo.tag}}"
        tag="li"
        class="main-nav__item">
        <span
          class="main-nav__link">
          #{{ t(tagInfo.tag) }}
        </span>
        <span
          class="main-nav__count">
          ({{ tagInfo.postsCount }})
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogNav',
  data () {
    return {
      tag: this.$route.params.tag
    }
  },
  computed: {
    ...mapGetters({
      tagsInfo: 'posts/getTagsInfo',
      translations: 'posts/getTagsTranslations'
    })
  },
  watch: {
    $route (toR) {
      this.tag = toR.params['tag']
      this.loadPosts(this.tag)
    }
  },
  created () {
    this.loadTranslations()
  },
  methods: {
    ...mapActions({
      loadTranslations: 'posts/loadTranslations',
      loadPosts: 'posts/loadPosts'
    }),
    t (val) {
      for (let key in this.translations) {
        switch (val) {
          case key:
            return this.translations[key]
            // eslint-disable-next-line no-unreachable
            // break
          // default:
          //   return val
        }
      }
    }
  }
}
</script>
