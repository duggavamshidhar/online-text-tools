import './globals.css'

import { Poppins } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: { default: 'Online Text Tools', template: '%s | Online Text Tools' },
  description:
    'A comprehensive collection of free online text tools to help you manipulate, format, and analyze text content quickly and easily.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${process.env.DOMAIN_NAME}/`,
    title: { default: 'Online Text Tools', template: '%s | Online Text Tools' },
    description:
      'A comprehensive collection of free online text tools to help you manipulate, format, and analyze text content quickly and easily.',
    siteName: 'Online Text Tools'
  }
}

export default function RootLayout({ children }) {
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
      </body>
    </html>
  )
}
