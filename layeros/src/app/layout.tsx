import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LayerOS - Next Generation Blockchain Infrastructure",
  description:
    "Scalable, secure, and developer-friendly blockchain infrastructure for the next generation of web applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">{children}</div>
      </body>
    </html>
  )
}

