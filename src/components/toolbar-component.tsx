import React from 'react'

interface NotepadToolbarProps {
  children?: React.ReactNode
}

export default function ToolbarComponent({ children }: NotepadToolbarProps) {
  return <div className="flex w-full justify-between gap-1">{children}</div>
}
