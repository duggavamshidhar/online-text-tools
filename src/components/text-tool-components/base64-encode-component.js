'use client'

import { Button } from '@/components/ui/button'
import { encodeToBase64 } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function Base64EncodeComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(encodeToBase64(text))}
      variant="outline"
      size="icon"
    >
      Encode to Base64
    </Button>
  )
}
