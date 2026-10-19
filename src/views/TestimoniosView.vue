<template>
  <article class="page">
    <PageIntro indice="08" titulo="Testimonios" />
    <p class="lede">{{ lorem }}</p>
    <div class="quotes">
      <blockquote v-for="item in testimonios" :key="item.id" class="quote">
        <p>{{ item.cita }}</p>
        <footer>{{ item.autor }}</footer>
      </blockquote>
    </div>
  </article>
</template>

<script>
import PageIntro from '@/components/PageIntro.vue'
import { LOREM, testimonios } from '@/content'

export default {
  name: 'TestimoniosView',
  components: { PageIntro },
  data() {
    return { lorem: LOREM, testimonios }
  }
}
</script>
