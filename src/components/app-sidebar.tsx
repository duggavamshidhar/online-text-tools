import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu
} from '@/components/ui/sidebar'
import * as React from 'react'
import SubmenuCollapsibleComponent from '@/components/submenu-collapsible-component'
import SubmenuComponent from '@/components/submenu-component'

interface menuItems {
  title: string
  url: string
  targetBlank: boolean
}

export function AppSidebar() {
  const contactItems: menuItems[] = [
    {
      title: 'GitHub',
      url: 'https://github.com/duggavamshidhar/online-text-tools/',
      targetBlank: true
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/duggavamshidhar/',
      targetBlank: true
    }
  ]
  const menuToolsItems: menuItems[] = [
    {
      title: 'Case Converter',
      url: 'case-converter',
      targetBlank: false
    },
    {
      title: 'Base64 Encode and Decode',
      url: 'base64-encode-and-decode',
      targetBlank: false
    },
    {
      title: 'Word Frequency',
      url: 'word-frequency',
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
              <SubmenuComponent title={'Home'} url={'/'} targetBlank={false} />
              <SubmenuCollapsibleComponent title="Text Tools" toolItems={menuToolsItems} />
              <SubmenuCollapsibleComponent title="Contact" toolItems={contactItems} />
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
