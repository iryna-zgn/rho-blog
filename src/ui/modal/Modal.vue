<template>
  <transition
    name="fade">
    <div
      class="modal">
      <div
        class="modal__backdrop"
        @click="closeModal(stateModalName)"
      />
      <a
        href="#"
        class="modal__close"
        @click.prevent="closeModal(stateModalName)">
        &times;
      </a>
      <div
        class="modal__container">
        <slot/>
      </div>
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
  methods: {
    ...mapActions({
      closeModal: 'posts/closeModal'
    })
  }
}
</script>
