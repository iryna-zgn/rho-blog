<template>
  <modal
    v-if="isShown"
    state-modal-name="galleryModal">
    <template slot="content">
      <div class="gallery">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          class="gallery__item">
          <div class="gallery__img">
            <img :src="item.img">
          </div>
          <div class="gallery__const">
            <div class="gallery__text">
              <div class="gallery__title">{{ item.title }}</div>
              <div class="gallery__desc">{{ item.text }}</div>
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
