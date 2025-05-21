'use client'

import ToolbarComponent from '@/components/toolbar-component'
import CharacterCountComponent from '@/components/character-count-component'
import {
  copyToClipboard,
  cutToClipboard,
  decodeFromBase64,
  downloadAsFile,
  encodeToBase64,
  handleCharacterCount,
  handleCharacterCountWithSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea
} from '@/modules/global'
import ToolsComponent from '@/components/tools-component'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

export default function Base64EncodeAndDecodeComponent() {
  const [text, setText] = useState<string>('')
  const toolBarItems = [
    {
      label: 'Encode to Base64',
      onClick: () => {
        setText(encodeToBase64(text))
      }
    },
    {
      label: 'Decode from Base64',
      onClick: () => {
        setText(decodeFromBase64(text))
      }
    },
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
  ]
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
      <div className="px-0.5 text-2xl font-semibold">Base64 Encode and Decode</div>
      <div className="flex flex-col gap-y-1">
        <ToolbarComponent>
          <CharacterCountComponent
            characterCount={handleCharacterCount(text)}
            characterCountWithoutSpaces={handleCharacterCountWithSpaces(text)}
            wordCount={handleWordCount(text)}
            sentenceCount={handleSentenceCount(text)}
            lineCount={handleLineCount(text)}
          />
          <ToolsComponent items={toolBarItems} />
        </ToolbarComponent>
        <Textarea
          className="min-h-[400px]"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}
