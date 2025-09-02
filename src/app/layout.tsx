import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nubite - Functional Snack Bar',
  description: 'Discover the future of snacking with our functional snack bars. Healthy, delicious, and nutritious.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}
