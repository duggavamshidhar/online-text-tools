import CaseConverterComponent from '@/components/case-converter-components/case-converter-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Converter'
}

export default function CaseConverterPage() {
  return <CaseConverterComponent />
}
