export default {
  getArticlesByPage (state) {
    const start = state.currentPage * 6
    const end = start + 6

    return state.articles.slice(start, end)
  }
}
