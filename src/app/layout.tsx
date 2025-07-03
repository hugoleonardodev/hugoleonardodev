import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'hugoleonardodev - Professional Software Development',
    template: '%s | hugoleonardodev',
  },
  description:
    'Professional software development services. Full-stack web applications, custom solutions, and digital transformation.',
  keywords: [
    'software development',
    'web development',
    'full-stack',
    'custom applications',
  ],
  authors: [
    { name: 'Hugo Leonardo', url: 'https://github.com/hugoleonardodev' },
  ],
  creator: 'hugoleonardodev',
  publisher: 'hugoleonardodev',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'hugoleonardodev - Professional Software Development',
    description:
      'Professional software development services. Full-stack web applications, custom solutions, and digital transformation.',
    siteName: 'hugoleonardodev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hugoleonardodev - Professional Software Development',
    description:
      'Professional software development services. Full-stack web applications, custom solutions, and digital transformation.',
    creator: '@yourusername',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
