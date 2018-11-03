<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <router-link
        tag="li"
        class="main-nav__item"
        :to="{name: 'about'}">
        <span
          class="main-nav__link">
          про мене
        </span>
      </router-link>
      <router-link
        tag="li"
        v-for="(tagInfo, index) in tagsInfo"
        :key="index"
        :to="{name: 'posts', params: {tag: tagInfo.tag}}"
        class="main-nav__item">
        <span
          class="main-nav__link">
          #{{ t(tagInfo.tag)}}
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
  computed: {
    ...mapGetters({
      tagsInfo: 'posts/getTagsInfo',
      translations: 'posts/getTranslations'
    })
  },
  created () {
    this.loadTranslations()
  },
  methods: {
    ...mapActions({
      loadTranslations: 'posts/loadTranslations'
    }),
    t (val) {
      for (let key in this.translations) {
        switch (val) {
          case key:
            return this.translations[key]
            // eslint-disable-next-line no-unreachable
            break
        }
      }
    }
  }
}
</script>
