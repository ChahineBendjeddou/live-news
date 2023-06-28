import { FC } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="grid items-center grid-cols-3 p-10">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The <span className="underline decoration-orange-400">PULSE</span>{' '}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* dark move btn */}
          <button className="hidden px-4 py-2 text-white rounded-full md:inline bg-slate-900 lg:px-8 lg:py-4 dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  )
}

export default Header
