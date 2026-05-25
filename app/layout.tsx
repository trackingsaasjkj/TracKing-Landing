import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

const BASE_URL = 'https://tracking-landing.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'TracKing — Gestión de mensajería en tiempo real',
    template: '%s | TracKing',
  },
  description:
    'Plataforma SaaS multi-tenant para gestionar flotas de mensajeros. Tracking GPS en tiempo real, liquidaciones automáticas y reportes financieros. Empieza gratis.',
  keywords: [
    'gestión de mensajería',
    'tracking GPS',
    'software mensajería',
    'flota mensajeros',
    'liquidaciones mensajeros',
    'SaaS mensajería',
    'seguimiento en tiempo real',
    'app mensajeros',
  ],
  authors: [{ name: 'TracKing' }],
  creator: 'TracKing',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'TracKing — Gestión de mensajería en tiempo real',
    description:
      'Plataforma SaaS multi-tenant para gestionar flotas de mensajeros. Tracking GPS, liquidaciones y reportes financieros. Empieza gratis.',
    url: BASE_URL,
    siteName: 'TracKing',
    type: 'website',
    locale: 'es_CO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TracKing — Plataforma de gestión de mensajería',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TracKing — Gestión de mensajería en tiempo real',
    description:
      'Plataforma SaaS para gestionar flotas de mensajeros. Tracking GPS, liquidaciones y reportes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TracKing',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description:
      'Plataforma SaaS multi-tenant para gestionar flotas de mensajeros. Tracking GPS en tiempo real, liquidaciones automáticas y reportes financieros.',
    url: BASE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Plan gratuito disponible',
    },
    featureList: [
      'Tracking GPS en tiempo real',
      'Gestión de servicios de mensajería',
      'App móvil para mensajeros',
      'Liquidaciones automáticas',
      'Reportes financieros',
      'Evidencias fotográficas de entrega',
    ],
  }

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
