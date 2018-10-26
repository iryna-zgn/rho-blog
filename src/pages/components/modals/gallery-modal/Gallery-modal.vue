<template>
  <modal
    v-if="isShown"
    state-modal-name="galleryModal">
    <template slot="content">
      <div class="gallery">
      <div
        class="gallery__item">
          <div class="gallery__img">
            <img
              :src="gallery.img">
          </div>
          <div
            v-if="gallery.shortText !== ''"
            v-html="gallery.shortText"
            class="gallery__const">
            {{ gallery.shortText }}
          </div>
      </div>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from './../../../ui/modal/Modal.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'galleryModal',
  components: {
    Modal
  },
  computed: {
    ...mapGetters({
      gallery: 'posts/getGallery',
      isShown: 'posts/isShownGallery'
    })
  }
}
</script>
