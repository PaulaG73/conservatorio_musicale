<template>
  <article class="page">
    <PageIntro titulo="Contacto" />
    <p class="lede">{{ lorem }}</p>
    <p class="hint">
      Por ahora el formulario solo revisa los datos en esta página. El envío se conectará más adelante.
    </p>

    <p v-if="enviado" class="banner" role="status">
      Los datos están completos. Cuando el correo esté conectado, este mensaje llegará al conservatorio.
    </p>

    <form id="contacto-form" class="form" novalidate @submit.prevent="enviar">
      <div class="field" :class="{ 'has-error': errores.nombre }">
        <label for="contacto-nombre">Nombre</label>
        <input id="contacto-nombre" v-model.trim="form.nombre" type="text" autocomplete="name">
        <span v-if="errores.nombre" class="field__error" role="alert">{{ errores.nombre }}</span>
      </div>
      <div class="field" :class="{ 'has-error': errores.correo }">
        <label for="contacto-correo">Correo</label>
        <input id="contacto-correo" v-model.trim="form.correo" type="email" autocomplete="email">
        <span v-if="errores.correo" class="field__error" role="alert">{{ errores.correo }}</span>
      </div>
      <div class="field" :class="{ 'has-error': errores.mensaje }">
        <label for="contacto-mensaje">Mensaje</label>
        <textarea id="contacto-mensaje" v-model.trim="form.mensaje"></textarea>
        <span v-if="errores.mensaje" class="field__error" role="alert">{{ errores.mensaje }}</span>
      </div>
      <button class="button button--acceso" type="submit">Enviar</button>
    </form>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM } from '@/content'

export default {
  name: 'ContactoView',
  components: { PageIntro },
  data() {
    return {
      lorem: LOREM,
      form: { nombre: '', correo: '', mensaje: '' },
      errores: {},
      enviado: false
    }
  },
  methods: {
    enviar() {
      const errores = {}
      if (!this.form.nombre) errores.nombre = 'Escribe tu nombre.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.correo)) errores.correo = 'Escribe un correo válido.'
      if (!this.form.mensaje) errores.mensaje = 'Escribe un mensaje.'

      this.errores = errores
      this.enviado = Object.keys(errores).length === 0

      if (this.enviado) {
        this.form = { nombre: '', correo: '', mensaje: '' }
        return
      }

      this.$nextTick(() => {
        const campo = this.$el.querySelector('.has-error input, .has-error textarea')
        if (campo) campo.focus()
      })
    }
  }
}
</script>
