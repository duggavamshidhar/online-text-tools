import { JSX } from 'react'

import CharacterCountComponent from '@/components/character-count-component'
import TextFieldComponent from '@/components/text-field-component'
import ToolsComponent from '@/components/tools-component'

interface MainComponentProps {
  title: string
  customTool?: JSX.Element
}

export default function MainComponent({ title, customTool }: MainComponentProps) {
  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">{title}</div>
        <div className="flex flex-col gap-y-1">
          <div className="flex w-full justify-between gap-1 overflow-x-auto">
            <CharacterCountComponent />
            <div className="flex items-center gap-x-1">
              {customTool}
              <ToolsComponent />
            </div>
          </div>
          <TextFieldComponent />
        </div>
      </div>
    </>
  )
}
