'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import ToolbarComponent from '@/components/toolbar-components/toolbar-component'
import { copyToClipboard, cutToClipboard, downloadAsFile, resetTextArea } from '@/modules/clipboard'
import {
  handleCharacterCount,
  handleCharacterCountWithoutSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  updateWordFrequency
} from '@/modules/textAnalysis'
import ToolsComponent from '@/components/toolbar-components/tools-component'
import CharacterCountComponent from '@/components/toolbar-components/character-count-component'
import WordFrequencyCounterComponent, {
  UpdateWordFrequencyProps
} from '@/components/word-frequency-components/word-frequency-counter-component'

export default function WordFrequencyComponent() {
  const [text, setText] = useState('')
  const [wordFrequency, setWordFrequency] = useState<UpdateWordFrequencyProps[]>([])

  const toolBarItems = useMemo(
    () => [
      {
        label: 'Download as CSV',
        onClick: () => {
          if (wordFrequency.length > 0) {
            downloadAsFile(
              wordFrequency.map((item) => `${item.word},${item.count}`).join('\n'),
              'word-frequency.csv'
            )
          }
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
        onClick: () => setText(resetTextArea(text))
      }
    ],
    [text, wordFrequency]
  )

  useEffect(() => {
    setWordFrequency(updateWordFrequency(text))
  }, [text])

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
      <div className="px-0.5 text-2xl font-semibold">Word Frequency</div>
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
            <WordFrequencyCounterComponent wordFrequencyData={wordFrequency} />
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
