<template>
  <div class="search">
    <transition
      name="fade">
      <input
        v-focus
        v-if="isShown"
        :value="value"
        :maxlength="maxlength"
        :placeholder="placeholder"
        type="text"
        class="search__input"
        @input="changeValue"
        @change="onChangeValue">
    </transition>
    <span
      class="search__icon icon-search"
      @click="toggleInput"/>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      isShown: false,
      maxlength: 30,
      placeholder: 'search',
      value: ''
    }
  },
  methods: {
    toggleInput () {
      this.isShown = !this.isShown
      this.value = ''
    },
    changeValue (e) {
      this.$emit('input', e.target.value)
    },
    onChangeValue (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
