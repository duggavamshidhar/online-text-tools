'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { md5HashGenerator } from '@/modules/text-transformation'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function MD5HashGeneratorComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={() => dispatch(setText(md5HashGenerator(text)))}
      variant="outline"
      size="icon"
    >
      Generate MD5 Hash
    </Button>
  )
}
