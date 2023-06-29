import NewsList from '@/components/NewsList'
import { categories } from '@/constants'
import fetchNews from '@/lib/fetchNews'
import { FC } from 'react'
interface pageProps {
  params: {
    category: string
  }
}

const page: FC<pageProps> = async ({ params: { category } }) => {
  const news: NewsResponse = await fetchNews(category)
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default page

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }))
}
