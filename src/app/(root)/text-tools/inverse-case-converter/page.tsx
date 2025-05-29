import { Metadata } from 'next'
import InverseCaseConverterComponent from '@/components/inverse-case-converter-components/inverse-case-converter-component'

export const metadata: Metadata = {
  title: 'Inverse Case Converter'
}

export default function InverseCaseConverterPage() {
  return <InverseCaseConverterComponent />
}
