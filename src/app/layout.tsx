import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

interface metaDataType {
  title: string
  description: string
}

const metaData: metaDataType = {
  title: 'Online Text Tools',
  description:
    'Online Text Tools is a web app offering free tools like character and word counters, text case converters, and more for easy text management.'
}

export const metadata: Metadata = {
  title: { default: metaData.title, template: `%s | ${metaData.title}` },
  description: metaData.description,
  openGraph: {
    title: { default: metaData.title, template: `%s | ${metaData.title}` },
    description: metaData.description
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
