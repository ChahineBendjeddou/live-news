import { FC } from 'react'
import Article from './Article'

interface NewsListProps {
  news: NewsResponse
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.data.map((article, index) => (
        <Article article={article} key={article + index.toString()} />
      ))}
    </main>
  )
}

export default NewsList
