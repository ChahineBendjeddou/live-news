import Image from 'next/image'
import { FC } from 'react'
import ReadMoreButton from './ReadMoreButton'
import LiveTimestamp from './LiveTimestamp'

interface ArticleProps {
  article: Article
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <article className="flex flex-col transition-all duration-200 ease-out rounded-lg shadow-lg bg-slate-100 dark:bg-slate-800 hover:scale-105 hover:shadow-xl hover:bg-slate-200">
      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.image}
          alt={article.title}
          className="object-cover w-full h-56 rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-col flex-1 ">
        <div className="flex flex-col flex-1 p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>
          <footer className="flex pt-5 ml-auto space-x-1 text-xs italic text-right text-gray-400">
            <p>{article.source}-</p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  )
}

export default Article
