import MD5HashGeneratorComponent from '@/components/md5-hash-generator-components/md5-hash-generator-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MD5 Hash Generator'
}

export default function MD5HashGeneratorPAGE() {
  return <MD5HashGeneratorComponent />
}
