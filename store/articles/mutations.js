export default {
  SET_ARTICLES (state, payload) {
    state.articles = payload
  },
  SET_PAGES_COUNT (state) {
    state.pagesCount = Math.ceil(state.articles.length / 6)
  },
  SET_CURRENT_PAGE (state, payload) {
    if (!payload) {
      state.currentPage = 0
    }
    else {
      state.currentPage = payload === 'next' ? ++state.currentPage : --state.currentPage
    }
  }
}
