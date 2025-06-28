import React from 'react'

import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
