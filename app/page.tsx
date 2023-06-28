import NewsList from "@/components/NewsList"
import { categories } from "@/constants"
import fetchNews from "@/lib/fetchNews"
import sortNewsByImage from "@/lib/sortNewsByImage"
import response from "@/response.json"
export default async function Home() {
  // fetch the news data
  const news: NewsResponse =
    process.env.NODE_ENV === "production"
      ? await fetchNews(categories.join(","))
      : sortNewsByImage(response)
  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}
