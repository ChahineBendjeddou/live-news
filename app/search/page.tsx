import NewsList from '@/components/NewsList'
import fetchNews from '@/lib/fetchNews'
import { FC } from 'react'

interface SearchProps {
  searchParams?: { term: string }
}

const Search: FC<SearchProps> = async ({ searchParams }) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  )
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  )
}

export default Search
