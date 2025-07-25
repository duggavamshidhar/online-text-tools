'use client'

import { Button } from '@/components/ui/button'
import { changeTextToTitleCase } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function TitleCaseConverterComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(changeTextToTitleCase(text))}
      variant="outline"
      size="icon"
    >
      Convert to Title Case
    </Button>
  )
}
