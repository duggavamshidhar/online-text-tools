'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { decodeFromBase64 } from '@/modules/text-transformation'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function Base64DecodeComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => dispatch(setText(decodeFromBase64(text)))}
      variant="outline"
      size="icon"
    >
      Decode from Base64
    </Button>
  )
}
