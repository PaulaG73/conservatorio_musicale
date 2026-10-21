<template>
  <article class="page">
    <PageIntro titulo="Noticias" />
    <p class="lede">{{ lorem }}</p>
    <div class="cards">
      <article v-for="noticia in noticias" :key="noticia.id" class="card">
        <img :src="logoSrc" :alt="noticia.titulo">
        <div class="card__body">
          <time :datetime="noticia.fecha">{{ noticia.fecha }}</time>
          <h2>{{ noticia.titulo }}</h2>
          <p>{{ noticia.texto }}</p>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM, logoSrc, noticias } from '@/content'

export default {
  name: 'NoticiasView',
  components: { PageIntro },
  data() {
    return { lorem: LOREM, logoSrc, noticias }
  }
}
</script>
