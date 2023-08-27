<template>
  <div class="new-article">
    <div class="new-article__form" @click="checkClick">
      <div ref="article" class="new-article__form-wrapper">
        <div class="new-article__form-header">
          <p class="new-article__title">Новая статья</p>
          <Icon class="new-article__icon-cross" symbol="cross" @click="closeModal" />
        </div>

        <label for="title" class="new-article__label">Заголовок:</label>
        <input id="title" class="new-article__input" v-model="newArticle.title">

        <label for="subtitle" class="new-article__label">Подзаголовок:</label>
        <input id="subtitle" class="new-article__input" v-model="newArticle.subTitle">

        <label for="content" class="new-article__label">Контент:</label>
        <textarea id="content" class="new-article__text" v-model="newArticle.content"></textarea>

        <button class="new-article__button" type="button" @click="$emit('add-article', newArticle)">Добавить статью</button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@components/ui/Icon.vue'
export default {
  name: 'NewArticle',

  components: {
    Icon
  },

  data () {
    return {
      newArticle: {
        title: '',
        subTitle: '',
        content: '',
      }
    }
  },

  methods: {
    closeModal () {
      this.$emit('close-modal')
      this.newArticle.title = ''
      this.newArticle.subTitle = ''
      this.newArticle.content = ''
    },

    checkClick (event) {
      const element = this.$refs.article
      if (element && !element.contains(event.target)) {
        this.$emit('close-modal')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/ui/new-article.scss";
</style>
