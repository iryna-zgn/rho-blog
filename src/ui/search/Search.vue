<template>
  <div class="search">
    <div
      class="search__field">
      <div
        ref="input"
        class="search__input"
        @click="focus">
        <input
          :maxlength="maxlength"
          :placeholder="placeholder"
          type="text"
          @input="changeValue">
      </div>
      <transition
        name="fade">
        <div
          v-if="isError"
          class="search__error">
          {{ errorMsg }}
        </div>
      </transition>
      <span
        class="search__icon icon-search"/>
    </div>
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
      maxlength: 30,
      placeholder: 'пошук',
      errorMsg: 'Не знайдено :('
    }
  },
  created () {
    const vm = this
    window.addEventListener('click', function (e) {
      if (!vm.$refs.input.contains(e.target)) {
        vm.$refs.input.classList.remove('is-focused')
      }
    })
  },
  methods: {
    focus () {
      this.$refs.input.classList.add('is-focused')
    },
    changeValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
