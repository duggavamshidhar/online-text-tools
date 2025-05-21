import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

interface SubmenuCollapsibleComponentProps {
  title: string
  toolItems: menuItems[]
}

interface menuItems {
  title: string
  url: string
  targetBlank: boolean
}

export default function SubmenuCollapsibleComponent(props: SubmenuCollapsibleComponentProps) {
  return (
    <>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between">
              {props.title}
              <ChevronRight
                size="28"
                className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {props.toolItems.map((item) => (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url.startsWith('https://') ? item.url : `/text-tools/${item.url}`}
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
