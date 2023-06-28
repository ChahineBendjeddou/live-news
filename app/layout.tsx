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
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
