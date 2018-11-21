<template>
  <modal
    v-if="isShown"
    state-modal-name="galleryModal">
    <template slot="content">
      <div class="gallery">
        <v-touch
          class="gallery__item"
          @swipeleft="slideGalleryImg('next')"
          @swiperight="slideGalleryImg('prev')">
          <div
            class="gallery__img">
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
            class="gallery__const">
            {{ gallery.shortText }}
          </div>
        </v-touch>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from './../../../ui/modal/Modal.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'GalleryModal',
  components: {
    Modal
  },
  computed: {
    ...mapGetters({
      gallery: 'posts/getCurrentGalleryImg',
      isShown: 'posts/isShownGallery'
    })
  },
  created () {
    window.addEventListener('keydown', (e) => {
      if (event.keyCode === 37) {
        this.slideGalleryImg('prev')
      } else if (event.keyCode === 39) {
        this.slideGalleryImg('next')
      }
    })
  },
  methods: {
    ...mapActions({
      slideGalleryImg: 'posts/slideGalleryImg'
    })
  }
}
</script>
