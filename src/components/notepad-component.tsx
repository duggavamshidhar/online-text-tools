'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  ClipboardCopy,
  ClipboardPaste,
  Download,
  ListRestart,
  Scissors,
  WholeWord
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function NotepadComponent() {
  const [text, setText] = useState<string>('')
  const [cursorPosition, setCursorPosition] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0
  })
  const [wordCount, setWordCount] = useState<number>(0)
  const [characterCount, setCharacterCount] = useState<number>(0)
  const toolBarLeftItems = [
    {
      id: 0,
      toolTipContent: 'Character count',
      icon: WholeWord,
      dataVar: characterCount
    },
    {
      id: 1,
      toolTipContent: 'Word count',
      icon: WholeWord,
      dataVar: wordCount
    }
  ]
  const toolBarRightItems = [
    {
      id: 0,
      toolTipContent: 'Download as text file',
      icon: Download,
      onClick: () => downloadAsFile()
    },
    {
      id: 1,
      toolTipContent: 'Cut',
      icon: Scissors,
      onClick: () => cutToClipboard()
    },
    {
      id: 2,
      toolTipContent: 'Copy to clipboard',
      icon: ClipboardCopy,
      onClick: () => copyToClipboard()
    },
    {
      id: 3,
      toolTipContent: 'Paste',
      icon: ClipboardPaste,
      onClick: () => pasteToClipboard()
    },
    {
      id: 4,
      toolTipContent: 'Reset',
      icon: ListRestart,
      onClick: () => resetTextArea()
    }
  ]

  useEffect(() => {
    function handleCharacterCount() {
      const finalCharacterArray: string[] = text.split('')
      setCharacterCount(finalCharacterArray.length)
    }

    function handleWordCount() {
      const receivedText = text.split(' ')
      const finalWordArray: string[] = []
      for (let i: number = 0; i < receivedText.length; i++) {
        if (receivedText[i] === ' ' || receivedText[i] === '') {
          continue
        }
        finalWordArray.push(receivedText[i])
      }
      setWordCount(finalWordArray.length)
    }

    handleCharacterCount()
    handleWordCount()
  }, [text])

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
          <div className="flex w-full items-center justify-between rounded-xl border p-1">
            <div className="flex gap-x-1">
              {toolBarLeftItems.map((item) => {
                return (
                  <TooltipProvider key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className="flex w-auto cursor-pointer justify-between gap-1 p-2"
                          variant="outline"
                          size="icon"
                        >
                          <item.icon size="28" />
                          <span>
                            <Badge variant="secondary">{item.dataVar}</Badge>
                          </span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.toolTipContent}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
            <div className="flex gap-x-1">
              {toolBarRightItems.map((item) => {
                return (
                  <TooltipProvider key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={item.onClick}
                          variant="outline"
                          className="cursor-pointer"
                          size="icon"
                        >
                          <item.icon size="28" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.toolTipContent}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
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
