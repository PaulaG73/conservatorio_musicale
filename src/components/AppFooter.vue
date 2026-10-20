<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__copy">
      <div class="socials">
        <a
          class="social"
          href="https://wa.me/56996450950"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.37-1.4a10.1 10.1 0 0 0 4.67 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.3-1.64-.59-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.38.24-.26.64-.38.85-.38.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.64.87 2.2.95 2.36.08.16.13.35.03.56-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.73-.85.92-1.14.19-.29.39-.24.64-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
          </svg>
        </a>
        <a
          class="social"
          href="#"
          title="Próximamente"
          aria-label="YouTube, próximamente"
          @click.prevent
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23 12.2s0-3.2-.4-4.6c-.22-.8-.86-1.44-1.66-1.66C19.5 5.5 12 5.5 12 5.5s-7.5 0-8.94.44c-.8.22-1.44.86-1.66 1.66C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.22.8.86 1.44 1.66 1.66C4.5 18.9 12 18.9 12 18.9s7.5 0 8.94-.44c.8-.22 1.44-.86 1.66-1.66.4-1.4.4-4.6.4-4.6zM9.75 15.02V9.38L15.5 12.2l-5.75 2.82z" />
          </svg>
        </a>
        <a
          class="social"
          href="#"
          title="Próximamente"
          aria-label="Facebook, próximamente"
          @click.prevent
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 22v-8.2h2.76l.41-3.2H14.5V8.55c0-.93.26-1.56 1.59-1.56H18V4.14C17.57 4.08 16.5 4 15.29 4c-2.48 0-4.18 1.51-4.18 4.29v2.31H8.2v3.2h2.91V22h3.39z" />
          </svg>
        </a>
        <a
          class="social"
          href="mailto:paulagajardosch@gmail.com"
          aria-label="Correo electrónico"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.2 5.5h17.6A1.2 1.2 0 0 1 22 6.7v10.6a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 17.3V6.7a1.2 1.2 0 0 1 1.2-1.2zm.35 1.55v.2l8.45 5.35 8.45-5.35v-.2H3.55zm16.9 1.15-7.72 4.9a1.15 1.15 0 0 1-1.22 0L3.8 8.2v8.85h16.4V8.2z" />
          </svg>
        </a>
      </div>
      <div class="footer__legal">
        <p><span class="footer__copy-mark">©</span> Todos los derechos reservados</p>
        <LogoMark inverse class="footer__logo" />
        <p>Conservatorio Musicale 2026</p>
      </div>
      <p class="footer__credit">Sitio web creado por PWEBDEV</p>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoMark from '@/components/LogoMark.vue'

export default {
  name: 'AppFooter',
  components: { LogoMark }
}
</script>
