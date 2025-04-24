import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: { default: 'Online Text Tools', template: '%s | Online Text Tools' },
  description:
    'Online Text Tools is a web application that provides a collection of free online text tools such as a character counter, word counter, and text case converter.',
  openGraph: {
    title: { default: 'Online Text Tools', template: '%s | Online Text Tools' },
    description:
      'Online Text Tools is a web application that provides a collection of free online text tools such as a character counter, word counter, and text case converter.'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
