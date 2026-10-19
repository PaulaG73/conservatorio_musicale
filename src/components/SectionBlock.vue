<template>
  <section :id="ancla" class="block">
    <h2>{{ titulo }}</h2>
    <p>{{ texto }}</p>
  </section>
</template>

<script>
export default {
  name: 'SectionBlock',
  props: {
    ancla: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    texto: {
      type: String,
      required: true
    }
  }
}
</script>
