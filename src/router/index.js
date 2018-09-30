import Vue from 'vue'
import Router from 'vue-router'
import PostsList from '../pages/Posts-list/Posts-list'
import Post from '../pages/Post/Post'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'postsList',
      component: PostsList
    },
    {
      path: '/post/:rout',
      name: 'post',
      component: Post
    }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ x: 0, y: 0 })
  //     }, 500)
  //   })
  // }
})

export default router
