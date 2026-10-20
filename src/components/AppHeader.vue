<template>
  <header class="header">
    <div class="header__inner">
      <router-link class="brand" to="/" aria-label="Conservatorio Musicale, ir al inicio">
        <LogoMark />
      </router-link>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="abierto ? 'true' : 'false'"
        aria-controls="navegacion"
        @click="abierto = !abierto"
      >
        <span class="visually-hidden">{{ abierto ? 'Cerrar menú' : 'Abrir menú' }}</span>
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
      </button>

      <nav id="navegacion" class="nav" :class="{ 'is-open': abierto }" aria-label="Secciones">
        <div
          v-for="link in enlaces"
          :key="link.to"
          class="nav__item"
          :class="{ 'is-open': submenu === link.to }"
          @mouseenter="entrar(link)"
          @mouseleave="salir"
        >
          <div class="nav__row">
            <router-link
              class="nav__link"
              :to="link.to"
              :class="{ 'is-current': $route.path === link.to }"
            >
              {{ link.label }}
            </router-link>
            <button
              v-if="link.hijos"
              class="nav__toggle"
              type="button"
              :aria-expanded="submenu === link.to ? 'true' : 'false'"
              :aria-label="(submenu === link.to ? 'Cerrar' : 'Abrir') + ' ' + link.label"
              @click="alternar(link.to)"
            >
              <span class="nav__caret"></span>
            </button>
          </div>
          <div v-if="link.hijos" class="nav__sub">
            <router-link
              v-for="hijo in link.hijos"
              :key="hijo.label"
              :to="hijo.to"
            >
              {{ hijo.label }}
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import LogoMark from '@/components/LogoMark.vue'

export default {
  name: 'AppHeader',
  components: { LogoMark },
  data() {
    return {
      abierto: false,
      submenu: '',
      enlaces: [
        { to: '/', label: 'Inicio' },
        { to: '/historia', label: 'Historia' },
        {
          to: '/nosotros',
          label: 'Nosotros',
          hijos: [
            { label: 'Nuestra inspiración', to: { path: '/nosotros', hash: '#inspiracion' } },
            { label: 'Fundadora', to: { path: '/nosotros', hash: '#fundadora' } },
            { label: 'Profesores', to: { path: '/nosotros', hash: '#profesores' } }
          ]
        },
        {
          to: '/catedras',
          label: 'Cátedras',
          hijos: [
            { label: 'Iniciación musical', to: { path: '/catedras', hash: '#iniciacion' } },
            { label: 'Clases de canto', to: { path: '/catedras', hash: '#canto' } },
            { label: 'Clases de piano', to: { path: '/catedras', hash: '#piano' } },
            { label: 'Clases de percusión', to: { path: '/catedras', hash: '#percusion' } },
            { label: 'Otras', to: { path: '/catedras', hash: '#otras' } }
          ]
        },
        { to: '/alumnos', label: 'Alumnos' },
        {
          to: '/servicios',
          label: 'Servicios',
          hijos: [
            { label: 'Pilates', to: { path: '/servicios', hash: '#pilates' } },
            { label: 'Yoga', to: { path: '/servicios', hash: '#yoga' } }
          ]
        },
        { to: '/noticias', label: 'Noticias' },
        { to: '/eventos', label: 'Eventos' },
        { to: '/testimonios', label: 'Testimonios' },
        { to: '/contacto', label: 'Contacto' }
      ]
    }
  },
  watch: {
    $route() {
      this.abierto = false
      this.submenu = ''
    }
  },
  mounted() {
    this.cerrarConEscape = (event) => {
      if (event.key === 'Escape') {
        this.submenu = ''
        this.abierto = false
      }
    }
    this.cerrarFuera = (event) => {
      if (!this.$el.contains(event.target)) this.submenu = ''
    }
    window.addEventListener('keydown', this.cerrarConEscape)
    document.addEventListener('click', this.cerrarFuera)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.cerrarConEscape)
    document.removeEventListener('click', this.cerrarFuera)
  },
  methods: {
    esEscritorio() {
      return window.matchMedia('(min-width: 701px)').matches
    },
    alternar(to) {
      this.submenu = this.submenu === to ? '' : to
    },
    entrar(link) {
      if (link.hijos && this.esEscritorio()) this.submenu = link.to
    },
    salir() {
      if (this.esEscritorio()) this.submenu = ''
    }
  }
}
</script>
