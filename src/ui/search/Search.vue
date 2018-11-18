<template>
  <div class="search">
    <transition
      name="fade">
      <div
        v-if="isShown">
        <input
          v-focus
          :maxlength="maxlength"
          :placeholder="placeholder"
          type="text"
          class="search__input"
          @input="changeValue">
        <div
          v-if="isError"
          class="search__error">
          {{ errorMsg }}
        </div>
      </div>
    </transition>
    <span
      class="search__icon icon-search"
      @click="toggleInput"/>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    isError: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShown: false,
      maxlength: 30,
      placeholder: 'search',
      errorMsg: 'Не знайдено :('
    }
  },
  methods: {
    toggleInput () {
      this.isShown = !this.isShown
    },
    changeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
