import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import News from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
