
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      translations: 'posts/getTagsTranslations'
    })
  },
  created () {
    this.loadTranslations()
  },
  methods: {
    ...mapActions({
      loadTranslations: 'posts/loadTranslations'
    }),
    t (val) {
      if (this.translations[val] !== undefined) {
        return this.translations[val]
      } else {
        return val
      }
    }
  }
}
