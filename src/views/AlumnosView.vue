<template>
  <article class="page">
    <PageIntro indice="04" titulo="Acceso alumnos" />
    <p class="lede">{{ lorem }}</p>
    <p class="note">
      Este registro crea el acceso del alumno. Más adelante, con la clave, podrá consultar sus notas y certificados.
    </p>
    <p class="hint">
      Por ahora el formulario solo revisa los datos en esta página. La cuenta todavía no se guarda.
    </p>

    <p v-if="enviado" class="banner" role="status">
      Los datos están completos. Cuando el acceso esté activo, esta clave servirá para entrar a notas y certificados.
    </p>

    <form class="form" novalidate @submit.prevent="enviar">
      <div class="form-row">
        <div class="field" :class="{ 'has-error': errores.nombre }">
          <label for="nombre">Nombre completo</label>
          <input id="nombre" v-model.trim="form.nombre" type="text" autocomplete="name">
          <span v-if="errores.nombre" class="field__error" role="alert">{{ errores.nombre }}</span>
        </div>
        <div class="field" :class="{ 'has-error': errores.correo }">
          <label for="correo">Correo</label>
          <input id="correo" v-model.trim="form.correo" type="email" autocomplete="email">
          <span v-if="errores.correo" class="field__error" role="alert">{{ errores.correo }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="field" :class="{ 'has-error': errores.telefono }">
          <label for="telefono">Teléfono</label>
          <input id="telefono" v-model.trim="form.telefono" type="tel" autocomplete="tel">
          <span v-if="errores.telefono" class="field__error" role="alert">{{ errores.telefono }}</span>
        </div>
        <div class="field" :class="{ 'has-error': errores.catedra }">
          <label for="catedra">Cátedra de interés</label>
          <select id="catedra" v-model="form.catedra">
            <option disabled value="">Elige una cátedra</option>
            <option>Iniciación musical</option>
            <option>Canto</option>
            <option>Piano</option>
            <option>Violín</option>
            <option>Guitarra</option>
          </select>
          <span v-if="errores.catedra" class="field__error" role="alert">{{ errores.catedra }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="field" :class="{ 'has-error': errores.clave }">
          <label for="clave">Clave de acceso</label>
          <input id="clave" v-model="form.clave" type="password" autocomplete="new-password">
          <span v-if="errores.clave" class="field__error" role="alert">{{ errores.clave }}</span>
        </div>
        <div class="field" :class="{ 'has-error': errores.confirmar }">
          <label for="confirmar">Confirmar clave</label>
          <input id="confirmar" v-model="form.confirmar" type="password" autocomplete="new-password">
          <span v-if="errores.confirmar" class="field__error" role="alert">{{ errores.confirmar }}</span>
        </div>
      </div>

      <button class="button" type="submit">Crear acceso</button>
    </form>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM } from '@/content'

const vacio = () => ({
  nombre: '',
  correo: '',
  telefono: '',
  catedra: '',
  clave: '',
  confirmar: ''
})

export default {
  name: 'AlumnosView',
  components: { PageIntro },
  data() {
    return {
      lorem: LOREM,
      form: vacio(),
      errores: {},
      enviado: false
    }
  },
  methods: {
    enviar() {
      const errores = {}
      if (!this.form.nombre) errores.nombre = 'Escribe tu nombre.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.correo)) errores.correo = 'Escribe un correo válido.'
      if (!this.form.telefono) errores.telefono = 'Escribe tu teléfono.'
      if (!this.form.catedra) errores.catedra = 'Elige una cátedra.'
      if (this.form.clave.length < 8) errores.clave = 'La clave debe tener al menos 8 caracteres.'
      if (this.form.clave !== this.form.confirmar) errores.confirmar = 'Las claves no coinciden.'

      this.errores = errores
      this.enviado = Object.keys(errores).length === 0

      if (this.enviado) {
        this.form = vacio()
        return
      }

      this.$nextTick(() => {
        const campo = this.$el.querySelector('.has-error input, .has-error select, .has-error textarea')
        if (campo) campo.focus()
      })
    }
  }
}
</script>
