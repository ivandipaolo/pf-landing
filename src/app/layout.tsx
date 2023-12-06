import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Antic',
  description: 'Elegance for interios and exteriors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-background md:mx-80 my-14'>{children}</body>
    </html>
  )
}
