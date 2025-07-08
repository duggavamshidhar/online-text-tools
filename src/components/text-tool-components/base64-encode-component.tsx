'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { encodeToBase64 } from '@/modules/text-transformation'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function Base64EncodeComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => dispatch(setText(encodeToBase64(text)))}
      variant="outline"
      size="icon"
    >
      Encode to Base64
    </Button>
  )
}
