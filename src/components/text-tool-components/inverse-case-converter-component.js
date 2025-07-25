'use client'

import { Button } from '@/components/ui/button'
import { changeTextToInverseCase } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function InverseCaseConverterComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(changeTextToInverseCase(text))}
      variant="outline"
      size="icon"
    >
      Convert to Inverse Case
    </Button>
  )
}
