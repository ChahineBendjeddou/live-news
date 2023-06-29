'use client'
import { FC } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
interface DarkModeButtonProps {}

const DarkModeButton: FC<DarkModeButtonProps> = ({}) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, theme, systemTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="w-8 h-8 text-yellow-500 cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="w-6 h-6 text-gray-900 cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}

export default DarkModeButton
