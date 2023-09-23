import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universal Custom Kitchens|Your Dream Kitchen',
  description: 'Your Vision, Our Expertise, One Dream Kitchen... ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Set up favicon here */}
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
