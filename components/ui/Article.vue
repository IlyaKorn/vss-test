<template>
  <NuxtLink :to="`/${article.id}`" :class="['article', { 'article--full': showFull }]">
    <h2 class="article__title">{{ article.title }}</h2>
    <p class="article__subtitle">{{ article.subTitle }}</p>
    <article v-if="showFull" class="article__content">{{ article.content }}</article>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Article',

  props: {
    article: {
      type: Object,
      required: true,
      default: () => {}
    },

    showFull: {
      type: Boolean,
      required: false,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/ui/article.scss";
</style>
