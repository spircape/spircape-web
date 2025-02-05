import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spircape',
  description: '虚中有实 实中有虚',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
