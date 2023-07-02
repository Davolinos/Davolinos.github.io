import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HobbyView from '../views/HobbyView.vue'
import NeoFetchView from '../views/NeoFetchView.vue'
import TechView from '../views/TechView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: HobbyView
    },
    {
      path: '/neofetch',
      name: 'neofetch',
      component: NeoFetchView
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechView
    }
  ]
})

export default router
