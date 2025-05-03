'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ClipboardCopy, ClipboardPaste, Download, ListRestart, Scissors } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
  const [text, setText] = useState<string>('')
  const [cursorPosition, setCursorPosition] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0
  })

  function handleCursorPosition(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { selectionStart, selectionEnd } = e.target
    setCursorPosition({ start: selectionStart, end: selectionEnd })
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Copied to clipboard successfully.'))
  }

  function pasteToClipboard() {
    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        const beforeCursor = text.slice(0, cursorPosition.start)
        const afterCursor = text.slice(cursorPosition.start)
        const updatedText = beforeCursor + clipboardText + afterCursor
        setText(updatedText)
        const newCursorPosition = beforeCursor.length + clipboardText.length
        setCursorPosition({ start: newCursorPosition, end: newCursorPosition })
      })
      .catch((err) => {
        console.error('Failed to read clipboard contents: ', err)
      })
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
                    <ClipboardCopy size="28" />
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
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                    onClick={pasteToClipboard}
                  >
                    <ClipboardPaste size="28" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Paste</p>
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
              onSelect={handleCursorPosition}
            />
          </div>
        </div>
      </div>
    </>
  )
}
