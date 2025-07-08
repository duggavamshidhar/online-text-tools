import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Toaster } from 'sonner'

import { AppSidebar } from '@/components/app-sidebar-components/app-sidebar'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SidebarProvider } from '@/components/ui/sidebar'
import Providers from '@/store/providers'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header />
          <Separator className="border" />
          <section className="p-2" aria-label="main">
            <Providers>{children}</Providers>
          </section>
          <Separator className="border" />
          <Footer />
        </main>
        <Toaster />
      </SidebarProvider>
    </>
  )
}
