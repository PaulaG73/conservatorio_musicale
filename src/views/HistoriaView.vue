<template>
  <article class="page">
    <PageIntro indice="01" titulo="Historia" />
    <p class="lede">{{ lorem }}</p>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM } from '@/content'

export default {
  name: 'HistoriaView',
  components: { PageIntro },
  data() {
    return { lorem: LOREM }
  }
}
</script>
