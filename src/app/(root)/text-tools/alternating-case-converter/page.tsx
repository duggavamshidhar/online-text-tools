import { Metadata } from 'next'
import AlternatingCaseConverterComponent from '@/components/alternating-case-converter-components/alternating-case-converter-component'

export const metadata: Metadata = {
  title: 'Alternating Case Converter'
}

export default function AlternatingCaseConverterPage() {
  return <AlternatingCaseConverterComponent />
}
