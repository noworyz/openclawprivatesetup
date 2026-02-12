import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
  description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps — deployed and configured by experts so you can skip the tech and get straight to results.',
  keywords: ['AI assistant', 'private AI', 'executive assistant', 'AI chief of staff', 'OpenClaw'],
  authors: [{ name: 'OpenClaw' }],
  openGraph: {
    title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
    description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
    description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
