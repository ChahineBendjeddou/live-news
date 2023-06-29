import { FC } from 'react'

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="p-10 font-serif text-lg text-center text-gray-400 animate-pulse">
      Loading News Feed...
    </div>
  )
}

export default loading
