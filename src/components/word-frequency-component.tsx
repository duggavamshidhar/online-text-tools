'use client'

import React, { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import ToolbarComponent from '@/components/toolbar-component'
import {
  copyToClipboard,
  cutToClipboard,
  downloadAsFile,
  handleCharacterCount,
  handleCharacterCountWithSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea,
  updateWordFrequency
} from '@/modules/global'
import ToolsComponent from '@/components/tools-component'
import CharacterCountComponent from '@/components/character-count-component'
import WordFrequencyCounterComponent, {
  UpdateWordFrequencyProps
} from '@/components/word-frequency-counter-component'

export default function WordFrequencyComponent() {
  const [text, setText] = useState<string>('')
  const [wordFrequency, setWordFrequency] = useState<UpdateWordFrequencyProps[]>([])
  const toolBarItems = [
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

  useEffect(() => {
    setWordFrequency(updateWordFrequency(text) as UpdateWordFrequencyProps[])
  }, [text])

  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">Word Frequency</div>
        <div className="flex flex-col gap-y-1">
          <ToolbarComponent>
            <div className="flex items-center">
              <CharacterCountComponent
                characterCount={handleCharacterCount(text)}
                characterCountWithoutSpaces={handleCharacterCountWithSpaces(text)}
                wordCount={handleWordCount(text)}
                sentenceCount={handleSentenceCount(text)}
                lineCount={handleLineCount(text)}
              />
              <WordFrequencyCounterComponent wordFrequencyData={wordFrequency} />
            </div>
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
    </>
  )
}
