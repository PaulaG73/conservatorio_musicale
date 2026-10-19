<template>
  <div class="site">
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <AppHeader />
    <main id="contenido">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>
