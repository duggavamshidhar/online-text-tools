'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  ClipboardCopy,
  Download,
  ListRestart,
  Minus,
  Scissors,
  WholeWord,
  WrapText
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  copyToClipboard,
  cutToClipboard,
  downloadAsFile,
  handleCharacterCount,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea
} from '@/modules/global'

export default function NotepadComponent() {
  const [text, setText] = useState<string>('')
  const [wordCount, setWordCount] = useState<number>(0)
  const [characterCount, setCharacterCount] = useState<number>(0)
  const [sentenceCount, setSentenceCount] = useState<number>(0)
  const [lineCount, setLineCount] = useState<number>(0)
  const toolBarLeftItems = [
    {
      toolTipContent: 'Character count',
      icon: WholeWord,
      dataVar: characterCount
    },
    {
      toolTipContent: 'Word count',
      icon: WholeWord,
      dataVar: wordCount
    },
    {
      toolTipContent: 'Sentence count',
      icon: Minus,
      dataVar: sentenceCount
    },
    {
      toolTipContent: 'Line count',
      icon: WrapText,
      dataVar: lineCount
    }
  ]
  const toolBarRightItems = [
    {
      toolTipContent: 'Download as text file',
      icon: Download,
      onClick: () => downloadAsFile(text)
    },
    {
      toolTipContent: 'Cut',
      icon: Scissors,
      onClick: () => {
        cutToClipboard(text)
        setText('')
      }
    },
    {
      toolTipContent: 'Copy to clipboard',
      icon: ClipboardCopy,
      onClick: () => copyToClipboard(text)
    },

    {
      toolTipContent: 'Reset',
      icon: ListRestart,
      onClick: () => {
        resetTextArea()
        setText('')
      }
    }
  ]

  useEffect(() => {
    setCharacterCount(handleCharacterCount(text))
    setWordCount(handleWordCount(text))
    setSentenceCount(handleSentenceCount(text))
    setLineCount(handleLineCount(text))
  }, [text])

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">Notepad</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex w-full items-center justify-between rounded-xl border p-1">
            <div className="flex gap-x-1">
              {toolBarLeftItems.map((item, index) => {
                return (
                  <TooltipProvider key={index}>
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
              {toolBarRightItems.map((item, index) => {
                return (
                  <TooltipProvider key={index}>
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
            />
          </div>
        </div>
      </div>
    </>
  )
}
