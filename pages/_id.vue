<template>
  <div>
    <Article :article="getCurrentArticle" :showFull="true" />
  </div>
</template>

<script>
import Article from '@components/ui/Article.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Article
  },

  computed: {
    ...mapState('articles', ['articles']),

    getCurrentArticle () {
      return this.articles.find(el => el.id === +this.$route.params.id)
    }
  }
}
</script>
