<template>
  <modal
    v-if="isShown"
    state-modal-name="galleryModal">
    <template slot="content">
      <div class="gallery">
        <div
          v-for="(item, index) in gallery"
          :key="index">
          <div
            v-for="(img, index) in item.images"
            :key="index"
            class="gallery__item">
              <div class="gallery__img">
                <img
                  :src="img.img">
              </div>
              <div class="gallery__const">
                <div
                  v-if="img.shortText"
                  v-html="img.shortText"
                  class="gallery__text">
                  {{ img.shortText }}
                </div>
              </div>
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
