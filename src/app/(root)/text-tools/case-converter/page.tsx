import CaseConverterComponent from '@/components/case-converter-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Converter'
}

export default function CaseConverter() {
  return (
    <>
      <CaseConverterComponent />
    </>
  )
}
