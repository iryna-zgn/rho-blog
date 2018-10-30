<template>
  <div class="main-nav">
    <ul class="main-nav__list">
      <router-link
        tag="li"
        class="main-nav__item"
        :to="{name: 'about'}">
        <a class="main-nav__link">
          про мене
        </a>
      </router-link>
      <router-link
        tag="li"
        v-for="(tagInfo, index) in tagsInfo"
        :key="index"
        :to="{name: 'posts', params: {tag: tagInfo.tag}}"
        class="main-nav__item">
        <a
          class="main-nav__link">
          #{{ tagInfo.tag }}
        </a>
        <span
          class="main-nav__count">
          ({{ tagInfo.postsCount }})
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogNav',
  computed: {
    ...mapGetters({
      tagsInfo: 'posts/getTagsInfo'
    })
  }
}
</script>
