'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Textarea } from '@/components/ui/textarea'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function TextFieldComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Textarea
      className="min-h-[500px]"
      placeholder="Enter your text here..."
      value={text}
      onChange={(e) => dispatch(setText(e.target.value))}
    />
  )
}
