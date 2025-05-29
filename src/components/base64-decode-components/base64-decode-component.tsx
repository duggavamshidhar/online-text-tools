'use client'

import ToolbarComponent from '@/components/toolbar-components/toolbar-component'
import CharacterCountComponent from '@/components/toolbar-components/character-count-component'
import {
  copyToClipboard,
  cutToClipboard,
  decodeFromBase64,
  downloadAsFile,
  handleCharacterCount,
  handleCharacterCountWithoutSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea
} from '@/modules/global'
import ToolsComponent from '@/components/toolbar-components/tools-component'
import { Textarea } from '@/components/ui/textarea'
import React, { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Base64DecodeComponent() {
  const [text, setText] = useState('')
  const toolBarItems = useMemo(
    () => [
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
    ],
    [text]
  )
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
      <div className="px-0.5 text-2xl font-semibold">Base64 Decode</div>
      <div className="flex flex-col gap-y-1">
        <ToolbarComponent>
          <CharacterCountComponent
            characterCount={handleCharacterCount(text)}
            characterCountWithoutSpaces={handleCharacterCountWithoutSpaces(text)}
            wordCount={handleWordCount(text)}
            sentenceCount={handleSentenceCount(text)}
            lineCount={handleLineCount(text)}
          />
          <div className="flex items-center gap-x-1">
            <Button
              className="w-auto cursor-pointer px-2 py-1"
              onClick={() => setText(decodeFromBase64(text))}
              variant="outline"
              size="icon"
            >
              Decode from Base64
            </Button>
            <ToolsComponent items={toolBarItems} />
          </div>
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
