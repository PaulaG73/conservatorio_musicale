<template>
  <article class="page">
    <PageIntro titulo="Nosotros" />
    <div class="blocks">
      <SectionBlock ancla="historia" titulo="Historia" :texto="lorem" />
      <SectionBlock ancla="inspiracion" titulo="Nuestra inspiración" :texto="lorem" />
      <SectionBlock ancla="fundadora" titulo="Fundadora" :texto="lorem" />
      <section id="profesores" class="block">
        <h2>Profesores</h2>
        <p>{{ lorem }}</p>
        <div class="teachers-carousel" :style="estiloCarrusel" aria-roledescription="carrusel">
          <button
            type="button"
            class="teachers-carousel__btn"
            aria-label="Profesores anteriores"
            @click="mover(-1)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 L8 12 l6.5 6.5" />
            </svg>
          </button>
          <div class="teachers-carousel__viewport">
            <div ref="pista" class="teachers" :class="{ 'is-instant': saltando }" @transitionend="alTerminar">
              <article
                v-for="(profesor, i) in pista"
                :key="profesor.clave"
                class="teacher"
                :inert="i < indice || i >= indice + visibles"
              >
                <div class="teacher__photo" aria-hidden="true">
                  <img v-if="profesor.foto" :src="profesor.foto" alt="" :style="profesor.encuadre ? { objectPosition: profesor.encuadre } : null">
                  <svg v-else viewBox="0 0 120 150" aria-hidden="true">
                    <circle cx="60" cy="42" r="24" />
                    <path d="M18 150c4-42 20-64 42-64s38 22 42 64H18z" />
                  </svg>
                </div>
                <div class="teacher__body">
                  <h3>{{ profesor.nombre }}</h3>
                  <p class="teacher__chair">{{ profesor.catedra }}</p>
                  <a :href="profesor.cv" @click="abrirCv($event, profesor)">Ver CV</a>
                </div>
              </article>
            </div>
          </div>
          <button
            type="button"
            class="teachers-carousel__btn"
            aria-label="Profesores siguientes"
            @click="mover(1)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 L16 12 l-6.5 6.5" />
            </svg>
          </button>
          <div class="teachers-carousel__dots">
            <button
              v-for="paso in pasos"
              :key="paso"
              type="button"
              :class="{ 'is-current': pasoActual === paso }"
              :aria-label="'Mostrar desde ' + profesores[paso].catedra"
              :aria-current="pasoActual === paso ? 'true' : undefined"
              @click="irA(paso)"
            />
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import SectionBlock from '@/components/SectionBlock.vue'
import { LOREM, profesores } from '@/content'

export default {
  name: 'NosotrosView',
  components: { PageIntro, SectionBlock },
  data() {
    return {
      lorem: LOREM,
      profesores,
      indice: profesores.length,
      visibles: 3,
      saltando: false,
      pendiente: 0,
      ajustando: false
    }
  },
  computed: {
    pista() {
      return [0, 1, 2].flatMap((copia) => this.profesores.map((profesor) => ({
        ...profesor,
        clave: `${copia}-${profesor.id}`
      })))
    },
    pasoActual() {
      const total = this.profesores.length
      return ((this.indice % total) + total) % total
    },
    pasos() {
      return this.profesores.map((_, paso) => paso)
    },
    estiloCarrusel() {
      return {
        '--teachers-visible': this.visibles,
        '--teachers-index': this.indice
      }
    }
  },
  created() {
    this.actualizarVisibles()
  },
  mounted() {
    window.addEventListener('resize', this.actualizarVisibles)
  },
  beforeUnmount() {
    clearTimeout(this.timerSalto)
    window.removeEventListener('resize', this.actualizarVisibles)
  },
  methods: {
    actualizarVisibles() {
      const ancho = window.innerWidth
      this.visibles = ancho >= 1101 ? 3 : ancho >= 701 ? 2 : 1
    },
    mover(paso) {
      this.pendiente += paso
      if (!this.ajustando) this.aplicar()
    },
    irA(paso) {
      const total = this.profesores.length
      let delta = paso - this.pasoActual
      if (delta > total / 2) delta -= total
      if (delta < -total / 2) delta += total
      if (delta) this.mover(delta)
    },
    aplicar() {
      const total = this.profesores.length
      const destino = this.indice + this.pendiente
      const tope = total * 3 - this.visibles
      if (destino >= 0 && destino <= tope) {
        this.indice = destino
        this.pendiente = 0
        this.programarSalto()
        return
      }
      const pasos = this.pendiente
      const logico = ((this.indice % total) + total) % total
      this.pendiente = 0
      this.ajustando = true
      this.saltando = true
      this.indice = total + logico
      this.$nextTick(() => {
        this.$refs.pista.offsetWidth
        this.saltando = false
        this.$nextTick(() => {
          const topeAhora = total * 3 - this.visibles
          let siguiente = total + logico + pasos
          let salto = false
          if (siguiente < 0 || siguiente > topeAhora) {
            const dentro = ((logico + pasos) % total + total) % total
            siguiente = total + dentro
            salto = true
            this.saltando = true
          }
          this.indice = siguiente
          this.ajustando = false
          const cerrar = () => {
            this.programarSalto()
            if (this.pendiente) this.aplicar()
          }
          if (salto) {
            this.$nextTick(() => {
              this.$refs.pista.offsetWidth
              this.saltando = false
              cerrar()
            })
          } else {
            cerrar()
          }
        })
      })
    },
    programarSalto() {
      clearTimeout(this.timerSalto)
      this.timerSalto = setTimeout(() => this.normalizar(), 460)
    },
    alTerminar(event) {
      if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
      this.normalizar()
    },
    normalizar() {
      if (this.ajustando || this.saltando) return
      const total = this.profesores.length
      if (this.indice >= total && this.indice < total * 2) return
      const logico = ((this.indice % total) + total) % total
      this.saltando = true
      this.indice = total + logico
      this.$nextTick(() => {
        this.$refs.pista.offsetWidth
        this.saltando = false
      })
    },
    abrirCv(event, profesor) {
      if (!profesor.cv || profesor.cv === '#') event.preventDefault()
    }
  }
}
</script>
