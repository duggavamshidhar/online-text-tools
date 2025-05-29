import { Metadata } from 'next'
import Base64DecodeComponent from '@/components/base64-decode-components/base64-decode-component'

export const metadata: Metadata = {
  title: 'Base64 Decode'
}

export default function Base64EncodeAndDecodePage() {
  return <Base64DecodeComponent />
}
