import { Metadata } from 'next'
import TitleCaseConverterComponent from '@/components/title-case-converter-components/title-case-converter-component'

export const metadata: Metadata = {
  title: 'Title Case Converter'
}

export default function TitleCaseConverterPage() {
  return <TitleCaseConverterComponent />
}
