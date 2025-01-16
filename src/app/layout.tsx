import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../lib/fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sourcesans',
})

export const metadata: Metadata = {
  title: 'TDA EHS Consulting',
  description: 'Professional EHS Training and Consulting Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sourceSans.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
