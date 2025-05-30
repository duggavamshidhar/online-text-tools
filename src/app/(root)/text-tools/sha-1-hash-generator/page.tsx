import SHA1HashGeneratorComponent from '@/components/sha-1-hash-generator-components/sha-1-hash-generator-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHA-1 Hash Generator'
}

export default function SHA1HashGeneratorPage() {
  return <SHA1HashGeneratorComponent />
}
