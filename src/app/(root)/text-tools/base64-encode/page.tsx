import { Metadata } from 'next'
import Base64EncodeComponent from '@/components/base64-encode-components/base64-encode-component'

export const metadata: Metadata = {
  title: 'Base64 Encode'
}

export default function Base64EncodeAndDecodePage() {
  return <Base64EncodeComponent />
}
