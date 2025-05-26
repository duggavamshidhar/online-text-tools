'use client'

import ToolbarComponent from '@/components/toolbar-component'
import { Textarea } from '@/components/ui/textarea'
import CharacterCountComponent from '@/components/character-count-component'
import {
  changeTextToAlternatingCase,
  changeTextToCapitalizedCase,
  changeTextToInverseCase,
  changeTextToLowerCase,
  changeTextToSentenceCase,
  changeTextToTitleCase,
  changeTextToUpperCase,
  copyToClipboard,
  cutToClipboard,
  downloadAsFile,
  handleCharacterCount,
  handleCharacterCountWithoutSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount,
  resetTextArea
} from '@/modules/global'
import React, { useState, useMemo } from 'react'
import ToolsComponent from '@/components/tools-component'

export default function CaseConverterComponent() {
  const [text, setText] = useState('')
  const toolBarItems = useMemo(
    () => [
      {
        label: 'Sentence Case',
        onClick: () => setText(changeTextToSentenceCase(text))
      },
      {
        label: 'Uppercase',
        onClick: () => setText(changeTextToUpperCase(text))
      },
      {
        label: 'Lowercase',
        onClick: () => setText(changeTextToLowerCase(text))
      },
      {
        label: 'Capitalized Case',
        onClick: () => setText(changeTextToCapitalizedCase(text))
      },
      {
        label: 'Title Case',
        onClick: () => setText(changeTextToTitleCase(text))
      },
      {
        label: 'Alternating Case',
        onClick: () => setText(changeTextToAlternatingCase(text))
      },
      {
        label: 'Inverse Case',
        onClick: () => setText(changeTextToInverseCase(text))
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
    ],
    [text]
  )
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
      <div className="px-0.5 text-2xl font-semibold">Case Converter</div>
      <div className="flex flex-col gap-y-1">
        <ToolbarComponent>
          <CharacterCountComponent
            characterCount={handleCharacterCount(text)}
            characterCountWithoutSpaces={handleCharacterCountWithoutSpaces(text)}
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
