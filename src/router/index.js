import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import PostsList from '../pages/Posts-list/Posts-list'
import PostsListFiltered from '../pages/Posts-list-filtered/Posts-list-filtered'
import Post from '../pages/Post/Post'
import About from '../pages/About/About'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'postsList',
      component: PostsList
    },
    {
      path: '/posts/:tag',
      name: 'posts',
      component: PostsListFiltered
    },
    {
      path: '/post/:rout',
      name: 'post',
      component: Post
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })
  }
})

router.beforeEach((to, from, next) => {
  store.dispatch('posts/showPreloader')
  next()
})

router.afterEach((to, from) => {
  store.dispatch('posts/hidePreloader')
})

export default router
