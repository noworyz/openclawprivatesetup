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
  title: 'OpenClaw Private Setup | White-Glove AI Deployment in Under 24 Hours',
  description: 'OpenClaw Private Setup deploys your own private AI assistant in under 24 hours for $1,000. Includes security hardening, integrations, training, and 15 days of support. Your data stays private.',
  keywords: [
    'AI assistant deployment',
    'private AI setup',
    'OpenClaw deployment service',
    'AI chief of staff',
    'executive AI assistant',
    'white-glove AI service',
    'private AI installation',
    'AI assistant for executives',
    'secure AI deployment',
    'enterprise AI setup',
  ],
  authors: [{ name: 'OpenClaw' }],
  creator: 'OpenClaw',
  publisher: 'OpenClaw',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://privatesetup.openclaw.ai',
  },
  openGraph: {
    title: 'OpenClaw Private Setup | White-Glove AI Deployment in Under 24 Hours',
    description: 'Deploy your own private AI assistant in under 24 hours for $1,000. Includes security hardening, integrations, training, and 15 days of support.',
    type: 'website',
    locale: 'en_US',
    url: 'https://privatesetup.openclaw.ai',
    siteName: 'OpenClaw Private Setup',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'OpenClaw Private Setup - Deploy Your Private AI in Under 24 Hours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Private Setup | Private AI Deployment Service',
    description: 'Deploy your own private AI assistant in under 24 hours for $1,000. Your data stays on your infrastructure.',
    images: ['/og-image.svg'],
    creator: '@openclaw',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'verification-code',
    // yandex: 'verification-code',
  },
}

// Schema.org structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpenClaw',
  description: 'Creator of OpenClaw, the open-source AI assistant platform, and provider of white-glove deployment services.',
  url: 'https://openclaw.ai',
  logo: 'https://privatesetup.openclaw.ai/favicon.svg',
  sameAs: [
    'https://twitter.com/openclaw',
    'https://github.com/openclaw',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@openclaw.ai',
    contactType: 'sales',
    availableLanguage: 'English',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OpenClaw Private Setup',
  description: 'White-glove deployment service for OpenClaw. We deploy, configure, and optimize your private AI assistant in under 24 hours.',
  provider: {
    '@type': 'Organization',
    name: 'OpenClaw',
  },
  serviceType: 'AI Deployment Service',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide (Remote) + Dallas, TX (In-Person)',
  },
  offers: {
    '@type': 'Offer',
    price: '1000',
    priceCurrency: 'USD',
    description: 'Complete setup + 15 days priority support',
    availability: 'https://schema.org/InStock',
  },
  termsOfService: 'https://privatesetup.openclaw.ai',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'OpenClaw Setup Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom OpenClaw Deployment',
          description: 'Full deployment on your hardware with security hardening',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Integration Setup',
          description: 'Connect email, calendar, messaging, and other tools',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Training & Onboarding',
          description: 'Hands-on session to get you productive immediately',
        },
      },
    ],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'OpenClaw Private Setup',
  description: 'White-glove AI deployment service. Deploy your private AI assistant in under 24 hours.',
  url: 'https://privatesetup.openclaw.ai',
  email: 'hello@openclaw.ai',
  priceRange: '$1,000',
  areaServed: [
    {
      '@type': 'City',
      name: 'Dallas',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 32.7767,
      longitude: -96.7970,
    },
    geoRadius: '50 mi',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is OpenClaw Private Setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenClaw Private Setup is a white-glove deployment service that sets up your private AI assistant in under 24 hours for $1,000. The service includes custom deployment on your hardware, security hardening, tool integrations, hands-on training, and 15 days of priority support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does OpenClaw Private Setup cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OpenClaw Private Setup costs $1,000 flat fee. This includes complete deployment, security configuration, integration with your tools, personalized training, and 15 days of priority support. Extended support packages are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does OpenClaw setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients are live within 24 hours of the discovery call. Complex setups with many integrations may take 24-48 hours. The discovery call itself only takes 15 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is OpenClaw Private Setup secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your data stays 100% on infrastructure you control. We configure audit trails, access controls, and security hardening. Your conversations and documents never touch shared servers or train external models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is OpenClaw different from ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT is a generic tool trained on the internet. OpenClaw is a private AI assistant that runs on your own hardware, knows your specific business context, and can take actions like managing email and calendar. It operates 24/7 as your AI chief of staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What support is included with OpenClaw Private Setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The $1,000 fee includes a hands-on training session and 15 days of priority support. During this period, we help you optimize workflows and resolve any issues. Extended support packages are available for ongoing assistance.',
      },
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'OpenClaw Private Setup - White-Glove AI Deployment Service',
  description: 'Deploy your own private AI assistant in under 24 hours for $1,000. Includes security hardening, integrations, training, and 15 days of support.',
  url: 'https://privatesetup.openclaw.ai',
  dateModified: '2026-02-12',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'OpenClaw Private Setup',
    url: 'https://privatesetup.openclaw.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}
