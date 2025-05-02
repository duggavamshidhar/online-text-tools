import { AppSidebar } from '@/components/app-sidebar'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="flex items-center justify-between p-1">
          <SidebarTrigger className="size-9 cursor-pointer" size="lg" />
          <ModeToggle />
        </header>
        <Separator />
        <section className="p-2" aria-label="main">
          {children}
        </section>
      </main>
    </SidebarProvider>
  )
}
