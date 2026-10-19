<template>
  <header class="page__header">
    <p class="eyebrow">{{ indice }}</p>
    <h1>{{ titulo }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    indice: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    }
  }
}
</script>
