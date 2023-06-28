'use client'
import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers
