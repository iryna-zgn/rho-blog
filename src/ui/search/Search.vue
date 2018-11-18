<template>
  <div class="search">
    <transition
      name="fade">
      <div
        v-show="isShown">
        <input
          ref="input"
          :maxlength="maxlength"
          :placeholder="placeholder"
          type="text"
          class="search__input"
          @input="changeValue">
        <transition
          name="fade">
          <div
            v-if="isError"
            class="search__error">
            {{ errorMsg }}
          </div>
        </transition>
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
      placeholder: 'пошук',
      errorMsg: 'Не знайдено :('
    }
  },
  methods: {
    toggleInput () {
      this.isShown = !this.isShown
      if (this.isShown) {
        this.$nextTick(_ => this.$refs.input.focus())
      }
    },
    changeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
