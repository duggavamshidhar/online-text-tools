import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { WholeWord } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import * as React from 'react'

interface WordFrequencyCounterComponentProps {
  wordFrequencyData: UpdateWordFrequencyProps[]
}

export interface UpdateWordFrequencyProps {
  word: string
  count: number
}

export default function WordFrequencyCounterComponent({
  wordFrequencyData
}: WordFrequencyCounterComponentProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mx-0.5 flex w-auto cursor-pointer items-center gap-1 p-2"
        >
          <WholeWord size="28" />
          <Separator orientation="vertical" />
          <span className="font-normal">Word Frequency Count</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[60vh] overflow-y-auto sm:max-w-[425px]">
        <DialogTitle>Word Frequency count</DialogTitle>
        <DialogHeader>
          <DialogDescription asChild>
            <div className="flex flex-col gap-2">
              {wordFrequencyData.length > 0 ? (
                wordFrequencyData.map((item, index) => (
                  <div key={index} className="flex w-full items-center justify-between">
                    <Button
                      className="flex w-full items-center justify-between px-2 py-1"
                      variant="outline"
                      size="icon"
                    >
                      <span className="font-normal">{item.word}</span>
                      <Badge variant="secondary">{item.count}</Badge>
                    </Button>
                  </div>
                ))
              ) : (
                <div className="flex w-full items-center justify-between">
                  <Button
                    className="flex w-full items-center justify-between px-2 py-1"
                    variant="outline"
                    size="icon"
                  >
                    <span className="font-normal">No words found</span>
                    <Badge variant="secondary">0</Badge>
                  </Button>
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
