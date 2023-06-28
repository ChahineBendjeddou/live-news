export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter(
    (article: Article) => article.image !== null
  )
  const newsWithoutImage = news.data.filter(
    (article: Article) => article.image === null
  )

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  }

  return sortedNewsResponse
}
