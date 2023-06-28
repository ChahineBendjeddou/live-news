import Link from 'next/link'
import { FC } from 'react'

interface NavLinkProps {
  category: Category
  isActive: boolean
}

const NavLink: FC<NavLinkProps> = ({ category, isActive }) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        'underline decoration-orange-400 underline-offset-4 font-bold text-lg'
      }`}
    >
      {category}
    </Link>
  )
}

export default NavLink
