<template>
  <div class="header">
    <nav class="header__nav-menu nav-menu">
      <ul class="nav-menu__list">
        <NuxtLink to="/" class="nav-menu__item--logo" @click.native="SET_CURRENT_PAGE()">
          <Icon class="nav-menu__logo" symbol="logo" />
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script>
import Icon from '@components/ui/Icon.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'Header',

  components: {
    Icon
  },

  methods: {
    ...mapMutations('articles', ['SET_CURRENT_PAGE'])
  }
}
</script>

<style lang="scss" scoped>

</style>
