
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
      for (let key in this.translations) {
        switch (val) {
          case key:
            return this.translations[key]
            // eslint-disable-next-line no-unreachable
            // break
          // default:
          //   return val
        }
      }
    }
  }
}
