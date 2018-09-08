<template>
  <div
    v-if="allPosts.length > 0"
    class="posts-list">
    <div
      class="post">
      <h2 class="t2 post__title">
        <a href="#">
          {{ lastPost.title }}
        </a>
      </h2>
      <div class="post__img">
        <a href="#">
          <img :src="lastPost.img" alt="">
        </a>
      </div>
      <p class="post__desc">
        {{ lastPost.text }}
      </p>
      <a href="#" class="post__more-btn">Continue reading...</a>
    </div>
    <div
      v-for="(post, index) in remainingPosts"
      :key="index"
      class="post-prev">
      <div class="post-prev__const">
        <a
          href="#"
          :style="{backgroundImage: `url(${post.img})`}"
          class="post-prev__img">
          <img src="/static/images/dummy_300x200.png"
            alt=""
            class="post-prev__dummy-img">
        </a>
      </div>
      <div class="post-prev__var">
        <h3 class="t2 post-prev__title">
          <a href="#">
            {{ post.title }}
          </a>
        </h3>
        <p class="post-prev__desc">
          {{ post.text }}
        </p>
        <a href="#" class="post-prev__more-btn">Continue reading...</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostsList',
  data () {
    return {
      allPosts: [
        {
          title: 'Egyptian All Enclusive',
          img: '/static/images/img-1.jpg',
          text: 'Sharm El Sheikh (Arabic: شرم الشيخ‎, IPA: [ˈʃɑɾm eʃˈʃeːx]) \
          is a city on the southern tip of the Sinai Peninsula, in South \
          Sinai Governorate, Egypt, on the coastal strip along the Red Sea. \
          Its population is approximately 73,000 as of 2015. Sharm El Sheikh \
          is the administrative hub of Egypt\'s South Sinai Governorate, \
          which includes the smaller coastal towns of Dahab and Nuweiba \
          as well as the mountainous interior, St. Catherine and Mount Sinai. \
          The city and holiday resort is a significant centre for tourism \
          in Egypt, while also attracting a number of international \
          conferences and diplomatic meetings.\
          The city and holiday resort is a significant centre for tourism \
          in Egypt, while also attracting a number of international \
          conferences and diplomatic meetings.'
        },
        {
          title: 'Egyptian Flowers',
          img: '/static/images/img-2.jpg',
          text: 'post description 2'
        },
        {
          title: 'Ras Mohammad National Park',
          img: '/static/images/img-3.jpg',
          text: 'post description 3'
        }
      ]
    }
  },
  computed: {
    reversedPosts () {
      return this.allPosts.reverse()
    },
    lastPost () {
      return this.reversedPosts[0]
    },
    remainingPosts () {
      return this.reversedPosts.slice(1)
    }
  }
}
</script>
