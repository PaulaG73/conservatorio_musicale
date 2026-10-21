<template>
  <article class="page">
    <PageIntro titulo="Otros servicios">
      <nav class="subnav" aria-label="En esta página">
        <a href="#pilates">Pilates</a>
        <a href="#yoga">Yoga</a>
      </nav>
    </PageIntro>
    <p class="lede">{{ lorem }}</p>
    <div class="blocks">
      <SectionBlock ancla="pilates" titulo="Pilates" :texto="lorem" />
      <SectionBlock ancla="yoga" titulo="Yoga" :texto="lorem" />
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import SectionBlock from '@/components/SectionBlock.vue'
import { LOREM } from '@/content'

export default {
  name: 'ServiciosView',
  components: { PageIntro, SectionBlock },
  data() {
    return { lorem: LOREM }
  }
}
</script>
