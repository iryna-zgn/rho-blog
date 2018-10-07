import Vue from 'vue'
import Router from 'vue-router'
import PostsList from '../pages/Posts-list/Posts-list'
import PostsListFiltered from '../pages/Posts-list-filtered/Posts-list-filtered'
import Post from '../pages/Post/Post'
import About from '../pages/About/About'

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
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router
