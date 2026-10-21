<template>
  <article class="page">
    <PageIntro titulo="Próximos eventos" />
    <p class="lede">{{ lorem }}</p>
    <div class="billboard">
      <article v-for="evento in eventos" :key="evento.id" class="billboard__item">
        <p class="billboard__date">
          <strong>{{ evento.dia }}</strong>
          <span>{{ evento.mes }} {{ evento.anio }}</span>
        </p>
        <div>
          <h2>{{ evento.titulo }}</h2>
          <p>{{ lorem }}</p>
        </div>
        <p class="billboard__meta">
          <time>{{ evento.hora }}</time>
          {{ evento.lugar }}
        </p>
      </article>
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM, eventos } from '@/content'

export default {
  name: 'EventosView',
  components: { PageIntro },
  data() {
    return { lorem: LOREM, eventos }
  }
}
</script>
