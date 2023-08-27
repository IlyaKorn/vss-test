import articles_mock from '@components/ui/articles-list/articles_mock.json'
export const actions = {
  async nuxtServerInit ({ commit }) {
    commit('articles/SET_ARTICLES', articles_mock)
    commit('articles/SET_PAGES_COUNT')
  }
}
