'use client'

import { useMemo, useState } from 'react'
import ToolbarComponent from '@/components/toolbar-components/toolbar-component'
import ToolsComponent from '@/components/toolbar-components/tools-component'
import CharacterCountComponent from '@/components/toolbar-components/character-count-component'
import {
  handleCharacterCount,
  handleCharacterCountWithoutSpaces,
  handleLineCount,
  handleSentenceCount,
  handleWordCount
} from '@/modules/textAnalysis'
import { Textarea } from '@/components/ui/textarea'
import { copyToClipboard, cutToClipboard, downloadAsFile, resetTextArea } from '@/modules/clipboard'
import { changeTextToUpperCase } from '@/modules/textTransformation'
import { Button } from '@/components/ui/button'

export default function UpperCaseConverterComponent() {
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
      <div className="px-0.5 text-2xl font-semibold">Upper Case Converter</div>
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
              onClick={() => setText(changeTextToUpperCase(text))}
              variant="outline"
              size="icon"
            >
              Convert to Upper Case
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
