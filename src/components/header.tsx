import React from 'react'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-1">
        <SidebarTrigger className="size-9 cursor-pointer" size="lg" />
        <ModeToggle />
      </header>
    </>
  )
}
