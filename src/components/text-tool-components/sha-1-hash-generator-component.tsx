'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import { sha1HashGenerator } from '@/modules/text-transformation'
import { RootState } from '@/store/store'
import { setText } from '@/store/text-slice'

export default function SHA1HashGeneratorComponent() {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.text.text)

  return (
    <Button
      className="w-auto cursor-pointer px-2 py-1"
      onClick={async () => dispatch(setText(await sha1HashGenerator(text)))}
      variant="outline"
      size="icon"
    >
      Generate SHA-1 Hash
    </Button>
  )
}
