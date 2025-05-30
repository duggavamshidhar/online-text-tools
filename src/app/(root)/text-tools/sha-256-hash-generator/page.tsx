import { Metadata } from 'next'
import SHA256HashGeneratorComponent from '@/components/sha-256-hash-generator-components/sha-256-hash-generator-component'

export const metadata: Metadata = {
  title: 'SHA-256 Hash Generator'
}

export default function SHA256HashGeneratorPage() {
  return <SHA256HashGeneratorComponent />
}
