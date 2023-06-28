'use client'
import { FC } from 'react'
import { categories } from '@/constants'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
interface NavLinksProps {}

const NavLinks: FC<NavLinksProps> = ({}) => {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname?.split('/').pop() === path
  }
  return (
    <nav className="grid max-w-6xl grid-cols-4 gap-4 mx-auto text-xs border-b md:grid-cols-7 md:text-sm">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  )
}

export default NavLinks
