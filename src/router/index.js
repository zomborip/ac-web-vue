import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CourseView from '@/views/CourseView.vue'
import RentView from '@/views/RentView.vue'
import DocsView from '@/views/DocsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "AC Studio & Live",
      }
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView,
      meta: {
        title: "AC - Tanfolyam",
      }
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentView,
      meta: {
        title: "AC - Bérlés",
      }
    },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView,
      meta: {
        title: "AC - Dokumentumok",
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: "AC - Kapcsolat", 
      }
    },
  ]
})

export default router
