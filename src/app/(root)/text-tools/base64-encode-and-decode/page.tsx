import { Metadata } from 'next'
import Base64EncodeAndDecodeComponent from '@/components/base64-encode-and-decode-components/base64-encode-and-decode-component'

export const metadata: Metadata = {
  title: 'Base64 Encode and Decode'
}

export default function Base64EncodeAndDecodePage() {
  return <Base64EncodeAndDecodeComponent />
}
