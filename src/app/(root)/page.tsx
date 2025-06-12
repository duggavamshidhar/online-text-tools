import NotepadComponent from '@/components/notepad-components/notepad-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notepad'
}

export default function Page() {
  return <NotepadComponent />
}
