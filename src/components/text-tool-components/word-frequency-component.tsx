'use client'

import { WholeWord } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'

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
import { Separator } from '@/components/ui/separator'
import { downloadAsFile } from '@/modules/tools'
import { updateWordFrequency } from '@/modules/word-frequency'
import { RootState } from '@/store/store'

export interface UpdateWordFrequencyProps {
  word: string
  count: number
}

export default function WordFrequencyCounterComponent() {
  const [open, setOpen] = useState(false)
  const text = useSelector((state: RootState) => state.text.text)
  const [wordFrequency, setWordFrequency] = useState<UpdateWordFrequencyProps[]>([])
  useEffect(() => {
    setWordFrequency(updateWordFrequency(text))
  }, [text])
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
        <DialogHeader>
          <DialogTitle>Word Frequency count</DialogTitle>
          <DialogDescription asChild>
            <Button
              onClick={() => {
                if (wordFrequency.length > 0) {
                  downloadAsFile(
                    wordFrequency.map((item) => `${item.word},${item.count}`).join('\n'),
                    'word-frequency.csv'
                  )
                } else {
                  toast.error('Please enter some text to download as a CSV file.')
                }
              }}
              type="button"
              className="w-auto cursor-pointer p-2"
              variant="secondary"
            >
              Download as CSV
            </Button>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {wordFrequency.length > 0 ? (
            wordFrequency.map((item, index) => (
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
      </DialogContent>
    </Dialog>
  )
}
