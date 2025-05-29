import { Metadata } from 'next'
import LowerCaseConverterComponent from '@/components/lower-case-converter-components/lower-case-converter-component'

export const metadata: Metadata = {
  title: 'Lower Case Converter'
}

export default function LowerCaseConverterPage() {
  return <LowerCaseConverterComponent />
}
