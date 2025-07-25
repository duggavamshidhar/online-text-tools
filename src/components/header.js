'use client'

import { GithubIcon, PanelBottomIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { ModeToggle } from '@/components/ui/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { useIsMobile } from '@/hooks/use-mobile'

export default function Header() {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const navSections = [
    {
      label: 'Conversion Tools',
      items: [
        { title: 'Sentence Case', url: 'sentence-case-converter' },
        { title: 'Upper Case', url: 'upper-case-converter' },
        { title: 'Lower Case', url: 'lower-case-converter' },
        { title: 'Capitalized Case', url: 'capitalized-case-converter' },
        { title: 'Title Case', url: 'title-case-converter' },
        { title: 'Alternating Case', url: 'alternating-case-converter' },
        { title: 'Inverse Case', url: 'inverse-case-converter' }
      ]
    },
    {
      label: 'Encoding Tools',
      items: [
        { title: 'Base64 Encode', url: 'base64-encode' },
        { title: 'Base64 Decode', url: 'base64-decode' },
        { title: 'MD5 Hash Generator', url: 'md5-hash-generator' },
        { title: 'SHA-1 Hash Generator', url: 'sha-1-hash-generator' },
        { title: 'SHA-256 Hash Generator', url: 'sha-256-hash-generator' }
      ]
    },
    {
      label: 'Analysis Tools',
      items: [
        { title: 'Character Count', url: 'character-count' },
        { title: 'Word Frequency', url: 'word-frequency' }
      ]
    }
  ]

  return (
    <header className="p-2 md:px-4">
      <div className="container mx-auto max-w-[1100px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isMobile && (
              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="lg">
                    <PanelBottomIcon size={30} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                  </DrawerHeader>
                  <div className="overflow-auto p-4">
                    {navSections.map((section, index) => (
                      <div key={index} className="flex flex-col gap-4 pt-2">
                        <h4 className="text-xl font-medium">{section.label}</h4>
                        {section.items.map((item) => {
                          return (
                            <Link
                              key={item.url}
                              href={`/tool/${item.url}`}
                              onClick={() => setOpen(false)}
                              className="text-[1.05rem] opacity-80 hover:underline"
                            >
                              {item.title}
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline">
                                  {item.label}
                                </span>
                              )}
                            </Link>
                          )
                        })}
                        <Separator />
                      </div>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            )}
            <Link href="/" className="flex items-center px-1">
              <Image src="/logo.svg" alt="Online Text Tools Logo" width={35} height={35} priority />
            </Link>
            {!isMobile && (
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {navSections.map((section) => (
                    <NavigationMenuItem key={section.label}>
                      <NavigationMenuTrigger className="cursor-pointer">
                        {section.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid min-w-[200px]">
                          {section.items.map((tool) => (
                            <li key={tool.url}>
                              <NavigationMenuLink asChild>
                                <Link href={`/tool/${tool.url}`}>{tool.title}</Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://github.com/duggavamshidhar/online-text-tools"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="cursor-pointer" variant="ghost" size="lg">
                <GithubIcon size={30} />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
