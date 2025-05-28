'use client'

import { useState } from 'react'
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
import { md5HashGenerator } from '@/modules/textTransformation'

export default function MD5HashGeneratorComponent() {
  const [text, setText] = useState('')
  const toolBarItems = [
    {
      label: 'Generate MD5 Hash',
      onClick: () => {
        setText(md5HashGenerator(text))
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
      <div className="px-0.5 text-2xl font-semibold">MD5 Hash Generator</div>
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
