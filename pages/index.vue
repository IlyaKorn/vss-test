<template>
  <div class="main-page">
    <div class="main-page__wrapper">
      <div class="main-page__actions">
        <div class="main-page__pagination pagination">
          <button
            :class="['pagination__button', {'disabled': isPrevBtnDisabled}]"
            type="button"
            @click="SET_CURRENT_PAGE('prev')"
          >
            Предыдущая страница
          </button>

          <button
            :class="['pagination__button', {'disabled': isNextBtnDisabled }]"
            type="button"
            @click="SET_CURRENT_PAGE('next')"
          >
            Следующая страница
          </button>
        </div>

        <Icon
          class="main-page__icon"
          symbol="add"
          @click="showModal = true"
        />
      </div>
      <ArticlesList :articles="getArticlesByPage"/>
    </div>
    <NewArticle v-if="showModal" @close-modal="closeModal" @add-article="addNewArticle" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import ArticlesList from '@components/ui/articles-list/ArticlesList.vue'
import NewArticle from '@components/ui/NewArticle.vue'
import Icon from '@components/ui/Icon.vue'
export default {
  name: 'Blog',

  components: {
    Icon,
    ArticlesList,
    NewArticle
  },

  data () {
    return {
      showModal: false
    }
  },

  computed: {
    ...mapState('articles', ['articles', 'pagesCount', 'currentPage']),
    ...mapGetters('articles', ['getArticlesByPage']),

    isPrevBtnDisabled () {
      return this.currentPage === 0
    },

    isNextBtnDisabled () {
      return this.currentPage === this.pagesCount - 1
    }
  },

  methods: {
    ...mapMutations('articles', ['SET_CURRENT_PAGE', 'SET_ARTICLES', 'SET_PAGES_COUNT']),

    closeModal () {
      this.showModal = false
    },

    addNewArticle (event) {
      const article = {
        ...event,
        id: this.articles.length
      }
      this.SET_ARTICLES([article, ...this.articles])
      this.SET_PAGES_COUNT()
      this.closeModal()
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/main-page/main-page.scss";
</style>
