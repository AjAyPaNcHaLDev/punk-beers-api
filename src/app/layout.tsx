import store from '@/store/store'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 
import AppProvider from '@/store/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Assignment Punk beers infinite scroll',
  description: 'Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppProvider>
      <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  )
}
