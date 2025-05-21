import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Wrench } from 'lucide-react'

interface ToolsItem {
  label: string
  onClick: () => void
}

interface ToolsProps {
  items: ToolsItem[]
}

export default function ToolsComponent({ items }: ToolsProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mx-0.5 flex w-auto cursor-pointer items-center gap-1 p-2"
        >
          <Wrench size="28" />
          <Separator orientation="vertical" />
          <span className="font-normal">Tools</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Tools</DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <div key={index} className="flex w-full items-center justify-between">
                  <span
                    onClick={item.onClick}
                    className="cursor-pointer font-normal hover:underline"
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
