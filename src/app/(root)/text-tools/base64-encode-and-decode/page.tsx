import { Metadata } from 'next'
import Base64EncodeAndDecodeComponent from '@/components/base64-encode-and-decode-component'

export const metadata: Metadata = {
  title: 'Base64 Encode and Decoder'
}

export default function Base64EncodeAndDecode() {
  return <Base64EncodeAndDecodeComponent />
}
