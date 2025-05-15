import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { CaseSensitive, ChevronRight, GithubIcon, Home, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export function AppSidebar() {
  const contactItems = [
    {
      title: 'GitHub',
      url: 'https://github.com/duggavamshidhar/online-text-tools',
      icon: GithubIcon,
      targetBlank: true
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/duggavamshidhar/online-text-tools',
      icon: LinkedinIcon,
      targetBlank: true
    }
  ]

  const textToolsItems = [
    {
      title: 'Case Converter',
      url: 'case-converter',
      icon: CaseSensitive,
      targetBlank: false
    }
  ]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <Home size="28" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between">
                      Text Tools
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {textToolsItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link
                              href={`/text-tools/${item.url}`}
                              target={item.targetBlank ? '_blank' : '_self'}
                            >
                              {item.icon !== null && <item.icon />}
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="flex w-full cursor-pointer items-center justify-between">
                      Contact
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {contactItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link href={item.url} target={item.targetBlank ? '_blank' : '_self'}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
