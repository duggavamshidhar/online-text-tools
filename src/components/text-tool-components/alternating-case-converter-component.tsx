'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { changeTextToAlternatingCase } from '@/modules/text-transformation'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function AlternatingCaseConverterComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => dispatch(setText(changeTextToAlternatingCase(text)))}
      variant="outline"
      size="icon"
    >
      Convert to Alternating Case
    </Button>
  )
}
