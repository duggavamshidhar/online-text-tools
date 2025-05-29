import { Metadata } from 'next'
import CapitalizedCaseConverterComponent from '@/components/capitalized-case-converter-components/capitalized-case-converter-component'

export const metadata: Metadata = {
  title: 'Capitalized Case Converter'
}

export default function CapitalizedCaseConverterPage() {
  return <CapitalizedCaseConverterComponent />
}
