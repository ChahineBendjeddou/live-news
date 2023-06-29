'use client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface ReadMoreButtonProps {
  article: Article
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ article }) => {
  const router = useRouter()
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    const url = `/article?${queryString}`
    router.push(url)
  }
  return (
    <button
      onClick={handleClick}
      className="h-10 bg-orange-400 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  )
}

export default ReadMoreButton
