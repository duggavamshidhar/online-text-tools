'use client'

import { Textarea } from '@/components/ui/textarea'
import { ClipboardCopy, Download, ListRestart, Scissors } from 'lucide-react'
import React, { useState } from 'react'
import {
  copyToClipboard,
  cutToClipboard,
  downloadAsFile,
  handleCharacterCount,
  handleCharacterCountWithSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea
} from '@/modules/global'
import CharacterCountComponent from '@/components/character-count-component'
import ToolbarComponent from '@/components/toolbar-component'

export default function NotepadComponent() {
  const [text, setText] = useState<string>('')

  const toolBarItems = [
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

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
      <div className="px-0.5 text-2xl font-semibold">Notepad</div>
      <div className="flex flex-col gap-y-2">
        <ToolbarComponent items={toolBarItems} />
        <Textarea
          className="min-h-[400px]"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <CharacterCountComponent
          characterCount={handleCharacterCount(text)}
          characterCountWithoutSpaces={handleCharacterCountWithSpaces(text)}
          wordCount={handleWordCount(text)}
          sentenceCount={handleSentenceCount(text)}
          lineCount={handleLineCount(text)}
        />
      </div>
    </div>
  )
}
