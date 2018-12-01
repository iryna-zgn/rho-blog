<template>
  <div class="about">
    <blog-quoter
      :quote="quote"
      :author="quoteAuthor"/>
    <div class="about__two-parts">
      <div class="about__const">
        <img
          src="static/about/img.jpg"
          alt="">
      </div>
      <div class="about__var">
        <p>
          розповіді / фото / фільми / думки <br>
          те, про що хочу розказати.<br>
          Ірина.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BlogQuoter from './../../components/quoter/Quoter'
export default {
  name: 'BlogAbout',
  components: {
    BlogQuoter
  },
  data () {
    return {
      quote: 'Фотограф не розглядає якусь сцену як момент, яким треба насолоджуватись, а сприймає її як майбутній спогад, який треба створити. Світлини можуть бути корисними для "я", відповідального за спогади, однак ми рідко роздивляємося їх довго або так часто, як ми на те сподівалися, а то й узагалі їх не переглядаємо. Водночас фотографування — це не обов\'язково найкращий спосіб насолодитися гарними краєвидами для того "я" туристів, що відповідає за відчуття.',
      quoteAuthor: 'Деніел Канеман'
    }
  }
}
</script>
