import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Link from 'next/link'

// Note: Place your favicon.ico file in the /app directory for it to be automatically used

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zheary",
  description: "A student and creator",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 py-6 container mx-auto px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

