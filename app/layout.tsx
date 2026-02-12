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
  metadataBase: new URL('https://privatesetup.openclaw.ai'),
  title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
  description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps — deployed and configured by experts so you can skip the tech and get straight to results.',
  keywords: ['AI assistant', 'private AI', 'executive assistant', 'AI chief of staff', 'OpenClaw'],
  authors: [{ name: 'OpenClaw' }],
  icons: {
    icon: '/favicon.svg',
    // TODO: Replace with actual favicon.ico and apple-touch-icon.png for full browser support
  },
  openGraph: {
    title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
    description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'OpenClaw Private Setup - Your Own AI Chief of Staff',
        // TODO: Replace with PNG version for full social media support
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Private Setup | Your Own AI Chief of Staff',
    description: 'A private AI assistant that knows your business, manages your chaos, and never sleeps.',
    images: ['/og-image.svg'],
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
