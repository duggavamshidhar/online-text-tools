import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'
import * as React from 'react'

interface SubmenuComponentProps {
  title: string
  url: string
  targetBlank: boolean
}

export default function SubmenuComponent(props: SubmenuComponentProps) {
  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link
            href={props.url}
            target={
              props.url.startsWith('https://') ? '_blank' : props.targetBlank ? '_blank' : '_self'
            }
          >
            <span>{props.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  )
}
