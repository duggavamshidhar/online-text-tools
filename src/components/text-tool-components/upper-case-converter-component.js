'use client'

import { Button } from '@/components/ui/button'
import { changeTextToUpperCase } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function UpperCaseConverterComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(changeTextToUpperCase(text))}
      variant="outline"
      size="icon"
    >
      Convert to Upper Case
    </Button>
  )
}
