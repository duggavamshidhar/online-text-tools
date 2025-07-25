'use client'

import { Wrench } from 'lucide-react'
import { useMemo, useState } from 'react'

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
import { copyToClipboard, cutToClipboard, downloadAsFile, resetTextArea } from '@/modules/tools'
import { useTextFieldStore } from '@/store/text-field-store'

export default function ToolsComponent() {
  const [open, setOpen] = useState(false)
  const { text, setText } = useTextFieldStore()
  const toolItems = useMemo(
    () => [
      {
        label: 'Download as text file',
        onClick: () => downloadAsFile(text)
      },
      {
        label: 'Cut',
        onClick: () => {
          cutToClipboard(text)
          setText('')
        }
      },
      {
        label: 'Copy',
        onClick: () => copyToClipboard(text)
      },
      {
        label: 'Reset',
        onClick: () => {
          setText(resetTextArea(text))
        }
      }
    ],
    [text, setText]
  )
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex w-auto cursor-pointer items-center gap-1 p-2"
        >
          <Wrench size="28" />
          <Separator orientation="vertical" className="max-sm:hidden" />
          <span className="font-normal max-sm:hidden">Tools</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Tools</DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div className="flex flex-col gap-2">
              {toolItems.map((item, index) => (
                <div key={index} className="flex w-full items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={item.onClick}
                    className="flex w-full cursor-pointer items-center"
                  >
                    {item.label}
                  </Button>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
