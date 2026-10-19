<template>
  <article class="page">
    <PageIntro indice="02" titulo="Nosotros">
      <nav class="subnav" aria-label="En esta página">
        <a href="#inspiracion">Nuestra inspiración</a>
        <a href="#fundadora">Fundadora</a>
        <a href="#profesores">Profesores</a>
      </nav>
    </PageIntro>
    <p class="lede">{{ lorem }}</p>
    <div class="blocks">
      <SectionBlock ancla="inspiracion" titulo="Nuestra inspiración" :texto="lorem" />
      <SectionBlock ancla="fundadora" titulo="Fundadora" :texto="lorem" />
      <section id="profesores" class="block">
        <h2>Profesores</h2>
        <p>{{ lorem }}</p>
        <div class="teachers">
          <article v-for="profesor in profesores" :key="profesor.id" class="teacher">
            <div class="teacher__photo" aria-hidden="true">
              <img v-if="profesor.foto" :src="profesor.foto" alt="">
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
    return { lorem: LOREM, profesores }
  },
  methods: {
    abrirCv(event, profesor) {
      if (!profesor.cv || profesor.cv === '#') event.preventDefault()
    }
  }
}
</script>
