import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import React, { useEffect, useState } from 'react'

interface CharacterCountProps {
  characterCount: number
  characterCountWithoutSpaces: number
  wordCount: number
  sentenceCount: number
  lineCount: number
}

export default function CharacterCountComponent(props: CharacterCountProps) {
  const [characterCount, setCharacterCount] = useState<number>(0)
  const [characterCountWithSpaces, setCharacterCountWithSpaces] = useState<number>(0)
  const [wordCount, setWordCount] = useState<number>(0)
  const [sentenceCount, setSentenceCount] = useState<number>(0)
  const [lineCount, setLineCount] = useState<number>(0)

  const toolBarItems = [
    { toolTipContent: 'Character count', label: 'Character count:', dataVar: characterCount },
    {
      toolTipContent: 'Character count with spaces',
      label: 'Character count with spaces:',
      dataVar: characterCountWithSpaces
    },
    { toolTipContent: 'Word count', label: 'Word count:', dataVar: wordCount },
    { toolTipContent: 'Sentence count', label: 'Sentence count:', dataVar: sentenceCount },
    { toolTipContent: 'Line count', label: 'Line count:', dataVar: lineCount }
  ]

  useEffect(() => {
    setCharacterCount(props.characterCount)
    setCharacterCountWithSpaces(props.characterCountWithoutSpaces)
    setWordCount(props.wordCount)
    setSentenceCount(props.sentenceCount)
    setLineCount(props.lineCount)
  }, [props])

  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden">
      <div className="inline-flex w-full min-w-max justify-center">
        {toolBarItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="mx-0.5 flex w-auto items-center gap-1 p-2"
                  variant="outline"
                  size="icon"
                >
                  <span className="font-normal">{item.label}</span>
                  <Badge variant="secondary">{item.dataVar}</Badge>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.toolTipContent}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}
