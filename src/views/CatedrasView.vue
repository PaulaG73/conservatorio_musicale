<template>
  <article class="page">
    <PageIntro indice="03" titulo="Cátedras musicales">
      <nav class="subnav" aria-label="En esta página">
        <a href="#iniciacion">Iniciación musical</a>
        <a href="#canto">Clases de canto</a>
        <a href="#piano">Clases de piano</a>
        <a href="#percusion">Clases de percusión</a>
        <a href="#otras">Otras</a>
      </nav>
    </PageIntro>
    <p class="lede">{{ lorem }}</p>
    <div class="blocks">
      <SectionBlock ancla="iniciacion" titulo="Iniciación musical" :texto="lorem" />
      <SectionBlock ancla="canto" titulo="Clases de canto" :texto="lorem" />
      <SectionBlock ancla="piano" titulo="Clases de piano" :texto="lorem" />
      <SectionBlock ancla="percusion" titulo="Clases de percusión" :texto="lorem" />
      <SectionBlock ancla="otras" titulo="Otras" :texto="lorem" />
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import SectionBlock from '@/components/SectionBlock.vue'
import { LOREM } from '@/content'

export default {
  name: 'CatedrasView',
  components: { PageIntro, SectionBlock },
  data() {
    return { lorem: LOREM }
  }
}
</script>
