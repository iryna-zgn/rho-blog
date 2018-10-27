<template>
  <modal
    v-if="isShown"
    state-modal-name="galleryModal">
    <template slot="content">
      <div class="gallery">
        <div
          class="gallery__item">
            <div class="gallery__img">
              <div
                class="gallery__arrow gallery__arrow--left icon-arrow-left"
                @click="slideGalleryImg('prev')"/>
              <img
                :src="gallery.img">
              <div
                class="gallery__arrow gallery__arrow--right icon-arrow-right"
                @click="slideGalleryImg('next')"/>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'galleryModal',
  components: {
    Modal
  },
  computed: {
    ...mapGetters({
      gallery: 'posts/getCurrentGalleryImg',
      isShown: 'posts/isShownGallery'
    })
  },
  methods: {
    ...mapActions({
      slideGalleryImg: 'posts/slideGalleryImg'
    })
  }
}
</script>
