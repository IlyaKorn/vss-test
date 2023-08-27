<template>
  <div class="layout">
    <Header />
    <div class="layout__main-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '@components/header/Header.vue'
export default {
  name: 'Default',

  components: {
    Header
  }
}
</script>
