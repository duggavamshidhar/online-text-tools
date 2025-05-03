'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Clipboard, Download, ListRestart, Scissors } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
  const [text, setText] = useState<string>('')

  function copyToClipboard() {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Copied to clipboard successfully.'))
  }
  function cutToClipboard() {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Copied to clipboard successfully.'))
      .finally(() => setText(''))
  }
  function resetTextArea() {
    setText('')
  }

  function downloadAsFile() {
    const blobPart: BlobPart[] = text.split('')
    console.log(blobPart)
    const blob = new Blob(blobPart, { type: 'text/plain' })
    const createLink = document.createElement('a')
    createLink.download = 'myFile.txt'
    createLink.href = URL.createObjectURL(blob)
    createLink.click()
    toast.success('Your file is downloading...')
    URL.revokeObjectURL(createLink.href)
  }
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">Notepad</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex w-full justify-end gap-x-1 rounded border p-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={downloadAsFile}
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Download size="28" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as text file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={cutToClipboard}
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Scissors size="28" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cut</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Clipboard size="28" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={resetTextArea}
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <ListRestart size="28" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <Textarea
              className="min-h-[400px]"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
