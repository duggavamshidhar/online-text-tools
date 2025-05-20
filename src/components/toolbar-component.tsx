import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import React from 'react'

interface ToolbarItem {
  toolTipContent: string
  label: string
  onClick: () => void
}

interface NotepadToolbarProps {
  items: ToolbarItem[]
}

export default function ToolbarComponent({ items }: NotepadToolbarProps) {
  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex w-full min-w-max justify-end">
        {items.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={item.onClick}
                  variant="outline"
                  size="icon"
                  className="mx-0.5 flex w-auto cursor-pointer items-center gap-1 p-2"
                >
                  <span className="font-normal">{item.label}</span>
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
