<template>
  <span class="icon" v-html="getIcon" @click="$emit('click')"></span>
</template>

<script>
import icons from '@icons/icons.js'
export default {
  name: 'Icon',

  props: {
    symbol: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  computed: {
    getIcon () {
      return icons[this.symbol]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/ui/icon.scss";
</style>
