import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu
} from '@/components/ui/sidebar'
import SubmenuCollapsibleComponent from '@/components/app-sidebar-components/submenu-collapsible-component'
import SubmenuComponent from '@/components/app-sidebar-components/submenu-component'

interface MenuItems {
  title: string
  url: string
  targetBlank: boolean
}

const contactItems: MenuItems[] = [
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

const menuToolsItems: MenuItems[] = [
  {
    title: 'Base64 Encode',
    url: 'base64-encode',
    targetBlank: false
  },
  {
    title: 'Base64 Decode',
    url: 'base64-decode',
    targetBlank: false
  },
  {
    title: 'MD5 Hash Generator',
    url: 'md5-hash-generator',
    targetBlank: false
  },
  {
    title: 'SHA1 Hash Generator',
    url: 'sha1-hash-generator',
    targetBlank: false
  },
  {
    title: 'SHA256 Hash Generator',
    url: 'sha256-hash-generator',
    targetBlank: false
  },
  {
    title: 'Sentence Case Converter',
    url: 'sentence-case-converter',
    targetBlank: false
  },
  {
    title: 'Upper Case Converter',
    url: 'upper-case-converter',
    targetBlank: false
  },
  {
    title: 'Lower Case Converter',
    url: 'lower-case-converter',
    targetBlank: false
  },
  {
    title: 'Capitalized Case Converter',
    url: 'capitalized-case-converter',
    targetBlank: false
  },
  {
    title: 'Title Case Converter',
    url: 'title-case-converter',
    targetBlank: false
  },
  {
    title: 'Alternating Case Converter',
    url: 'alternating-case-converter',
    targetBlank: false
  },
  {
    title: 'Inverse Case Converter',
    url: 'inverse-case-converter',
    targetBlank: false
  },
  {
    title: 'Word Frequency',
    url: 'word-frequency',
    targetBlank: false
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SubmenuComponent title={'Home'} url={'/'} targetBlank={false} />
              <SubmenuCollapsibleComponent title="Text Tools" toolItems={menuToolsItems} />
              <SubmenuComponent
                title={'Request a Tool'}
                url={'https://github.com/duggavamshidhar/online-text-tools/issues/new'}
                targetBlank={true}
              />
              <SubmenuComponent
                title={'Report an Issue'}
                url={'https://github.com/duggavamshidhar/online-text-tools/issues/new'}
                targetBlank={true}
              />
              <SubmenuCollapsibleComponent title="Contact" toolItems={contactItems} />
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
