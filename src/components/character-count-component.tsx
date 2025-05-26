import { Button } from '@/components/ui/button'
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CaseSensitive } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface CharacterCountProps {
  characterCount: number
  characterCountWithoutSpaces: number
  wordCount: number
  sentenceCount: number
  lineCount: number
}

export default function CharacterCountComponent({
  characterCount,
  characterCountWithoutSpaces,
  wordCount,
  sentenceCount,
  lineCount
}: CharacterCountProps) {
  const [open, setOpen] = React.useState(false)

  const toolBarItems = React.useMemo(
    () => [
      { label: 'Character count:', dataVar: characterCount },
      { label: 'Character count with spaces:', dataVar: characterCountWithoutSpaces },
      { label: 'Word count:', dataVar: wordCount },
      { label: 'Sentence count:', dataVar: sentenceCount },
      { label: 'Line count:', dataVar: lineCount }
    ],
    [characterCount, characterCountWithoutSpaces, wordCount, sentenceCount, lineCount]
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mx-0.5 flex w-auto cursor-pointer items-center gap-1 p-2"
        >
          <CaseSensitive size="28" />
          <Separator orientation="vertical" />
          <span className="font-normal">Character Count</span>
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
