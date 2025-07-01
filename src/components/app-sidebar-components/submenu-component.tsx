import Link from 'next/link'

import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

interface SubmenuComponentProps {
  title: string
  url: string
  targetBlank: boolean
}

export default function SubmenuComponent({ title, url, targetBlank }: SubmenuComponentProps) {
  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link
            href={url}
            target={url.startsWith('https://') ? '_blank' : targetBlank ? '_blank' : '_self'}
          >
            <span>{title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  )
}
