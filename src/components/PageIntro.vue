<template>
  <header class="page__header">
    <h1>{{ titulo }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageIntro',
  props: {
    titulo: {
      type: String,
      required: true
    }
  }
}
</script>
