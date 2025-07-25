'use client'

import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  handleCharacterCount,
  handleCharacterCountWithoutSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount
} from '@/modules/character-count'
import { useTextFieldStore } from '@/store/text-field-store'

export default function CharacterCountComponent() {
  const [open, setOpen] = useState(false)
  const { text } = useTextFieldStore()

  const toolBarItems = useMemo(
    () => [
      { label: 'Character count:', dataVar: handleCharacterCount(text) },
      { label: 'Character count with spaces:', dataVar: handleCharacterCountWithoutSpaces(text) },
      { label: 'Word count:', dataVar: handleWordCount(text) },
      { label: 'Sentence count:', dataVar: handleSentenceCount(text) },
      { label: 'Line count:', dataVar: handleLineCount(text) }
    ],
    [text]
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mx-0.5 flex w-auto cursor-pointer items-center gap-1 p-2"
        >
          <span className="font-normal max-sm:hidden">Character Count</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Character count</DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div className="flex flex-col gap-2">
              {toolBarItems.map((item, index) => (
                <div key={index} className="flex w-full items-center justify-between">
                  <Button
                    className="flex w-full items-center justify-between px-2 py-1"
                    variant="outline"
                    size="icon"
                  >
                    <span className="font-normal">{item.label}</span>
                    <Badge variant="secondary">{item.dataVar}</Badge>
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
