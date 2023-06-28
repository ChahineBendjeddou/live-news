import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PulseFeed',
  description:
    'PulseFeed is a dynamic Next.js app that keeps you connected to the pulse of the world. Experience a constant flow of real-time updates, captivating stories, and trending topics from diverse sources. Stay in the know with PulseFeed, where information flows seamlessly and empowers you to stay ahead of the curve.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-zinc-900 transition-all duration-700 dark:text-gray-100 `}
      >
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  )
}
