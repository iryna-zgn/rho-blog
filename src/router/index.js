import Vue from 'vue'
import Router from 'vue-router'
import PostsList from '../pages/Posts-list/Posts-list'
import PostsListFiltered from '../pages/Posts-list-filtered/Posts-list-filtered'
import Post from '../pages/Post/Post'
import About from '../pages/About/About'

Vue.use(Router)

const router = new Router({
  // mode: 'hash',
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/rho-blog',
      name: 'postsList',
      component: PostsList
    },
    {
      path: '/rho-blog/posts/:tag',
      name: 'posts',
      component: PostsListFiltered
    },
    {
      path: '/rho-blog/post/:rout',
      name: 'post',
      component: Post
    },
    {
      path: '/rho-blog/about',
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

export default router
