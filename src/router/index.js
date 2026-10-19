import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView,
    meta: { title: 'Inicio' }
  },
  {
    path: '/historia',
    name: 'historia',
    component: () => import('../views/HistoriaView.vue'),
    meta: { title: 'Historia' }
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/NosotrosView.vue'),
    meta: { title: 'Nosotros' }
  },
  {
    path: '/catedras',
    name: 'catedras',
    component: () => import('../views/CatedrasView.vue'),
    meta: { title: 'Cátedras musicales' }
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: () => import('../views/AlumnosView.vue'),
    meta: { title: 'Alumnos' }
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/ServiciosView.vue'),
    meta: { title: 'Otros servicios' }
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('../views/NoticiasView.vue'),
    meta: { title: 'Noticias' }
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/EventosView.vue'),
    meta: { title: 'Próximos eventos' }
  },
  {
    path: '/testimonios',
    name: 'testimonios',
    component: () => import('../views/TestimoniosView.vue'),
    meta: { title: 'Testimonios' }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue'),
    meta: { title: 'Contacto' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 120 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'Conservatorio Musicale'
  document.title = to.meta.title ? `${to.meta.title} · ${base}` : base
})

export default router
