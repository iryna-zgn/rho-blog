<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <router-link
        v-for="(tagInfo, index) in tagsInfo"
        :key="index"
        :to="{name: 'posts', params: {tag: tagInfo.tag}}"
        :class="[{'is-active-tag': hasCurrentTag(tagInfo.tag)}]"
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
      <router-link
        :to="{name: 'about'}"
        tag="li"
        class="main-nav__item">
        <span
          class="main-nav__link">
          про мене
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import tagsTranslate from './../../../mixins/tagsTranslate'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'BlogNav',
  mixins: [
    tagsTranslate
  ],
  data () {
    return {
      tag: this.$route.params.tag
    }
  },
  computed: {
    ...mapGetters({
      tagsInfo: 'posts/getTagsInfo',
      currentPost: 'posts/getCurrentPost'
    })
  },
  watch: {
    $route (toR) {
      this.tag = toR.params['tag']
      this.loadPosts(this.tag)
    }
  },
  methods: {
    ...mapActions({
      loadPosts: 'posts/loadPosts'
    }),
    hasCurrentTag (tag) {
      if (this.currentPost.post) {
        return this.currentPost.post.tags.some(e => e === tag)
      }
    }
  }
}
</script>
