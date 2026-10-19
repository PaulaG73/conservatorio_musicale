<template>
  <span class="logo" :class="{ 'logo--inverse': inverse }">
    <img class="logo__img" :src="logoSrc" alt="Conservatorio Musicale, La Serena">
    <span class="logo__city" aria-hidden="true">La Serena</span>
  </span>
</template>

<script>
import { logoSrc } from '@/content'

export default {
  name: 'LogoMark',
  props: {
    inverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { logoSrc }
  }
}
</script>
