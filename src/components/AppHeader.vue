<template>
  <header class="header">
    <div class="header__inner">
      <router-link
        v-if="$route.path !== '/'"
        class="home-back"
        to="/"
        aria-label="Volver al inicio"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 5.5 L8 12 l6.5 6.5" />
        </svg>
      </router-link>

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
        <span class="menu-toggle__bars" aria-hidden="true">
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
        </span>
        <span class="menu-toggle__label">{{ abierto ? 'Cerrar' : 'Menú' }}</span>
      </button>

      <nav id="navegacion" class="nav" :class="{ 'is-open': abierto }" aria-label="Secciones">
        <div
          v-for="link in enlaces"
          :key="link.to"
          class="nav__item"
          :class="{ 'is-open': submenu === link.to, 'nav__item--acceso': link.destacado }"
          @mouseenter="entrar(link)"
          @mouseleave="salir"
        >
          <div class="nav__row">
            <button
              v-if="link.soloMenu"
              type="button"
              class="nav__link"
              :aria-expanded="submenu === link.to ? 'true' : 'false'"
              @click="alternar(link.to)"
            >
              {{ link.label }}
              <span class="nav__caret" aria-hidden="true"></span>
            </button>
            <router-link
              v-else
              class="nav__link"
              :class="{ 'is-current': $route.path === link.to, 'nav__link--acceso': link.destacado }"
              :to="link.to"
            >
              {{ link.label }}
            </router-link>
            <button
              v-if="link.hijos && !link.soloMenu"
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
            <template v-for="hijo in link.hijos" :key="hijo.label">
              <a
                v-if="hijo.href"
                class="nav__sub-partner"
                :href="hijo.href"
                target="_blank"
                rel="noopener noreferrer"
                @click="cerrar"
              >
                <img :src="hijo.logo" alt="" :class="{ 'logo-ensamble': hijo.logo.includes('ensamble') }">
                <span>{{ hijo.label }}</span>
              </a>
              <router-link v-else :to="hijo.to">
                {{ hijo.label }}
              </router-link>
            </template>
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
        {
          to: '/nosotros',
          label: 'Nosotros',
          hijos: [
            { label: 'Historia', to: { path: '/nosotros', hash: '#historia' } },
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
            { label: 'Canto', to: { path: '/catedras', hash: '#canto' } },
            { label: 'Piano', to: { path: '/catedras', hash: '#piano' } },
            { label: 'Violín', to: { path: '/catedras', hash: '#violin' } },
            { label: 'Guitarra', to: { path: '/catedras', hash: '#guitarra' } }
          ]
        },
        {
          to: '/servicios',
          label: 'Servicios',
          hijos: [
            { label: 'Pilates', to: { path: '/servicios', hash: '#pilates' } },
            { label: 'Yoga', to: { path: '/servicios', hash: '#yoga' } }
          ]
        },
        {
          to: 'links',
          label: 'Links',
          soloMenu: true,
          hijos: [
            {
              label: 'Ensamble Voz de Mujer',
              href: 'https://www.instagram.com/ensamblevozdemujer/',
              logo: '/logo_ensamble.jpg'
            },
            {
              label: 'Sociedad Bach La Serena',
              href: 'https://www.instagram.com/sociedadbachlaserena/',
              logo: '/logo_sociedad_bach.jpg'
            }
          ]
        },
        { to: '/noticias', label: 'Noticias' },
        { to: '/eventos', label: 'Eventos' },
        { to: '/testimonios', label: 'Testimonios' },
        { to: '/contacto', label: 'Contacto' },
        { to: '/alumnos', label: 'Acceso alumnos', destacado: true }
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
    cerrar() {
      this.submenu = ''
      this.abierto = false
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
