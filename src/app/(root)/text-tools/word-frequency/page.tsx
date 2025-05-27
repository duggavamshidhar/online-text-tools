import WordFrequencyComponent from '@/components/word-frequency-components/word-frequency-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Word Frequency'
}

export default function WordFrequencyPage() {
  return <WordFrequencyComponent />
}
