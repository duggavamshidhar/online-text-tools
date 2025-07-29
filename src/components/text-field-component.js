'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { useTextFieldStore } from '@/store/text-field-store'

export default function TextFieldComponent() {
  const { text, setText, reset } = useTextFieldStore()
  const pathname = usePathname()
  useEffect(() => {
    reset()
  }, [pathname, reset])

  return (
    <Textarea
      className="min-h-[550px]"
      placeholder="Enter your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  )
}
