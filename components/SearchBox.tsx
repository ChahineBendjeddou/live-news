'use client'
import { useRouter } from 'next/navigation'
import { FC, FormEvent, useState } from 'react'

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = ({}) => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input) return
    router.push(`/search?term=${input.trim()}`)
    setInput('')
  }
  return (
    <form
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 w-full text-gray-500 placeholder-gray-500 bg-transparent rounded-sm outline-none h-14 dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
