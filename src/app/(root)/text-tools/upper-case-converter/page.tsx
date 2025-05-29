import { Metadata } from 'next'
import UpperCaseConverterComponent from '@/components/upper-case-converter-components/upper-case-converter-component'

export const metadata: Metadata = {
  title: 'Upper Case Converter'
}

export default function UpperCaseConverterPage() {
  return <UpperCaseConverterComponent />
}
