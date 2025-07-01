import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'

interface SubmenuCollapsibleComponentProps {
  title: string
  isDefaultOpen: boolean
  toolItems: MenuItems[]
}

interface MenuItems {
  title: string
  url: string
  targetBlank: boolean
}

export default function SubmenuCollapsibleComponent({
  title,
  isDefaultOpen,
  toolItems
}: SubmenuCollapsibleComponentProps) {
  return (
    <>
      <Collapsible defaultOpen={isDefaultOpen} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between">
              {title}
              <ChevronRight
                size="28"
                className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {toolItems.map((item) => (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url.startsWith('https://') ? item.url : `/tool/${item.url}`}
                      target={item.targetBlank ? '_blank' : '_self'}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </>
  )
}
