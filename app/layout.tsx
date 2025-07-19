import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meu progresso em Análise e desenvolvimento de sistemas',
  description: '------------',
  generator: '------',
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
