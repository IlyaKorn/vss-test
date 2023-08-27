<template>
  <ul class="articles-list">
    <Article
      v-for="article in articles"
      class="articles-list__item"
      :article="article"
      :key="article.id"
    >
    </Article>
  </ul>
</template>

<script>
import Article from '@components/ui/Article.vue'
export default {
  name: 'ArticlesList',

  props: {
    articles: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  components: {
    Article
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/ui/articles-list.scss";
</style>
