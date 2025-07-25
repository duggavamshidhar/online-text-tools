'use client'

import { Button } from '@/components/ui/button'
import { changeTextToSentenceCase } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function SentenceCaseConverterComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(changeTextToSentenceCase(text))}
      variant="outline"
      size="icon"
    >
      Convert to Sentence Case
    </Button>
  )
}
