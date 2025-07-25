'use client'

import { Button } from '@/components/ui/button'
import { sha256HashGenerator } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function SHA256HashGeneratorComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={async () => setText(await sha256HashGenerator(text))}
      variant="outline"
      size="icon"
    >
      Generate SHA-256 Hash
    </Button>
  )
}
