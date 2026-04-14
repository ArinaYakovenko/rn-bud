import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import GalleryPage from '../pages/GalleryPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/gallery/:id', name: 'Gallery', component: GalleryPage, props: true },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { left: 0, top: 0 }
  },
})
