import { Metadata } from 'next'
import SentenceCaseConverterComponent from '@/components/sentence-case-converter-components/sentence-case-converter-component'

export const metadata: Metadata = {
  title: 'Sentence Case Converter'
}

export default function SentenceCaseConverterPage() {
  return <SentenceCaseConverterComponent />
}
