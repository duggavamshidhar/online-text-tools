'use client'

import { Button } from '@/components/ui/button'
import { md5HashGenerator } from '@/modules/text-transformation'
import { useTextFieldStore } from '@/store/text-field-store'

export default function MD5HashGeneratorComponent() {
  const { text, setText } = useTextFieldStore()
  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => setText(md5HashGenerator(text))}
      variant="outline"
      size="icon"
    >
      Generate MD5 Hash
    </Button>
  )
}
