'use client'

import { Button } from '@/components/ui/button'
import { changeTextToLowerCase } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function LowerCaseConverterComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(changeTextToLowerCase(text))}
      variant="outline"
      size="icon"
    >
      Convert to Lower Case
    </Button>
  )
}
