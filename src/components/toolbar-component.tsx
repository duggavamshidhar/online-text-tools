import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import React from 'react'

interface ToolbarItem {
  toolTipContent: string
  icon: React.ElementType
  onClick: () => void
}

interface NotepadToolbarProps {
  items: ToolbarItem[]
}

export default function ToolbarComponent({ items }: NotepadToolbarProps) {
  return (
    <div className="rounded-xl border p-1">
      <div className="flex w-full justify-end overflow-x-auto py-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={item.onClick}
                  variant="outline"
                  size="icon"
                  className="mx-0.5 flex w-auto items-center gap-1 p-2"
                >
                  <item.icon className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.toolTipContent}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}
