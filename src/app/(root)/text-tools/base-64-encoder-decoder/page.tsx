import { Metadata } from 'next'
import Base64EncoderDecoderComponent from '@/components/base-64-encoder-decoder-component'

export const metadata: Metadata = {
  title: 'Base64 Encoder/Decoder'
}

export default function Base64EncoderDecoder() {
  return <Base64EncoderDecoderComponent />
}
