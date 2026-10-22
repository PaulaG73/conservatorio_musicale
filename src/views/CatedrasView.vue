<template>
  <article class="page">
    <PageIntro titulo="Cátedras musicales" />
    <p class="lede">{{ lorem }}</p>
    <div class="blocks">
      <SectionBlock ancla="iniciacion" titulo="Iniciación musical" :texto="lorem" />
      <SectionBlock ancla="canto" titulo="Canto" :texto="lorem" />
      <SectionBlock ancla="piano" titulo="Piano" :texto="lorem" />
      <SectionBlock ancla="violin" titulo="Violín" :texto="lorem" />
      <SectionBlock ancla="guitarra" titulo="Guitarra" :texto="lorem" />
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
