'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Clipboard, History } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Page() {
  const [text, setText] = useState<string>('')

  function copyToClipboard() {
    navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard successfully.'))
  }
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-y-2">
        <div className="px-0.5 text-2xl font-semibold">Notepad</div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-1 self-end">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="cursor-pointer"
              size="icon"
            >
              <Clipboard size="28" />
            </Button>
            <Button variant="outline" className="cursor-pointer" size="icon">
              <History size="28" />
            </Button>
          </div>
          <div>
            <Textarea
              className="min-h-[400px]"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
