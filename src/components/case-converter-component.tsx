'use client'

import ToolbarComponent from '@/components/toolbar-component'
import { Textarea } from '@/components/ui/textarea'
import CharacterCountComponent from '@/components/character-count-component'
import {
  changeTextToAlternatingCase,
  changeTextToCapitalizedCase,
  changeTextToInverseCase,
  changeTextToSentenceCase,
  changeTextToTitleCase,
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
import React, { useState } from 'react'

export default function CaseConverterComponent() {
  const [text, setText] = useState<string>('')
  const toolBarItems = [
    {
      toolTipContent: 'Convert to sentence case',
      label: 'Sentence Case',
      onClick: () => setText(changeTextToSentenceCase(text))
    },
    {
      toolTipContent: 'Convert to uppercase',
      label: 'Uppercase',
      onClick: () => setText(text.toUpperCase())
    },
    {
      toolTipContent: 'Convert to lowercase',
      label: 'Lowercase',
      onClick: () => setText(text.toLowerCase())
    },
    {
      toolTipContent: 'Convert to capitalized case',
      label: 'Capitalized Case',
      onClick: () => setText(changeTextToCapitalizedCase(text))
    },
    {
      toolTipContent: 'Convert to title case',
      label: 'Title Case',
      onClick: () => setText(changeTextToTitleCase(text))
    },
    {
      toolTipContent: 'Convert to alternating case',
      label: 'Alternating Case',
      onClick: () => setText(changeTextToAlternatingCase(text))
    },
    {
      toolTipContent: 'Convert to inverse case',
      label: 'Inverse Case',
      onClick: () => setText(changeTextToInverseCase(text))
    },
    {
      toolTipContent: 'Download as text file',
      label: 'Download as text file',
      onClick: () => downloadAsFile(text)
    },
    {
      toolTipContent: 'Cut',
      label: 'Cut',
      onClick: () => {
        cutToClipboard(text)
        setText('')
      }
    },
    {
      toolTipContent: 'Copy to clipboard',
      label: 'Copy',
      onClick: () => copyToClipboard(text)
    },
    {
      toolTipContent: 'Reset',
      label: 'Reset',
      onClick: () => {
        resetTextArea()
        setText('')
      }
    }
  ]
  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">Case Converter</div>
        <div className="flex flex-col gap-y-1">
          <ToolbarComponent items={toolBarItems}>
            <CharacterCountComponent
              characterCount={handleCharacterCount(text)}
              characterCountWithoutSpaces={handleCharacterCountWithSpaces(text)}
              wordCount={handleWordCount(text)}
              sentenceCount={handleSentenceCount(text)}
              lineCount={handleLineCount(text)}
            />
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
