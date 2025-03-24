import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '../router/middleware/loadLayoutMiddleware,js'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      layout: 'AppLayoutDefault',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(loadLayoutMiddleware)

export default router
