import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Min Thant Ko' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../pages/ProjectsPage.vue'),
    meta: { title: 'Projects — Min Thant Ko' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: { title: 'Contact — Min Thant Ko' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 100, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Min Thant Ko'
})

export default router
