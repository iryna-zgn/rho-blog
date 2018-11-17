<template>
  <transition
    name="fade">
    <div class="modal">
      <div
        class="modal__backdrop"
        @click="closeModal(stateModalName)"
      />
      <span
        class="modal__close"
        @click="closeModal(stateModalName)">
        &times;
      </span>
      <div
        class="modal__container">
        <slot
          name="content"/></div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Modal',
  props: {
    stateModalName: {
      type: String,
      default: 'defaultModal'
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal(this.stateModalName)
      }
    })
  },
  methods: {
    ...mapActions({
      closeModal: 'posts/closeModal'
    })
  }
}
</script>
