<template>
  <div class="error">
    <p class="error_title">К сожалению, данная страница не существует</p>
    <Icon class="error__icon" symbol="sad" />
  </div>
</template>
<script>
import Icon from '@components/ui/Icon.vue'
export default {
  name: 'Error',

  components: {
    Icon
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/error/error.scss";
</style>
