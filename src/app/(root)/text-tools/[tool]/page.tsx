import AlternatingCaseConverterComponent from '@/components/alternating-case-converter-components/alternating-case-converter-component'
import Base64DecodeComponent from '@/components/base64-decode-components/base64-decode-component'
import Base64EncodeComponent from '@/components/base64-encode-components/base64-encode-component'
import CapitalizedCaseConverterComponent from '@/components/capitalized-case-converter-components/capitalized-case-converter-component'
import InverseCaseConverterComponent from '@/components/inverse-case-converter-components/inverse-case-converter-component'
import LowerCaseConverterComponent from '@/components/lower-case-converter-components/lower-case-converter-component'
import MD5HashGeneratorComponent from '@/components/md5-hash-generator-components/md5-hash-generator-component'
import SentenceCaseConverterComponent from '@/components/sentence-case-converter-components/sentence-case-converter-component'
import SHA1HashGeneratorComponent from '@/components/sha-1-hash-generator-components/sha-1-hash-generator-component'
import SHA256HashGeneratorComponent from '@/components/sha-256-hash-generator-components/sha-256-hash-generator-component'
import TitleCaseConverterComponent from '@/components/title-case-converter-components/title-case-converter-component'
import UpperCaseConverterComponent from '@/components/upper-case-converter-components/upper-case-converter-component'
import WordFrequencyComponent from '@/components/word-frequency-components/word-frequency-component'
import NotepadComponent from '@/components/notepad-components/notepad-component'

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params
  switch (tool) {
    case 'alternating-case-converter':
      return {
        title: 'Alternating Case Converter'
      }
    case 'base64-decode':
      return {
        title: 'Base64 Decode'
      }
    case 'base64-encode':
      return {
        title: 'Base64 Encode'
      }
    case 'capitalized-case-converter':
      return {
        title: 'Capitalized Case Converter'
      }
    case 'inverse-case-converter':
      return {
        title: 'Inverse Case Converter'
      }
    case 'lower-case-converter':
      return {
        title: 'Lower Case Converter'
      }
    case 'md5-hash-generator':
      return {
        title: 'MD5 Hash Generator'
      }
    case 'sentence-case-converter':
      return {
        title: 'Sentence Case Converter'
      }
    case 'sha-1-hash-generator':
      return {
        title: 'SHA-1 Hash Generator'
      }
    case 'sha-256-hash-generator':
      return {
        title: 'SHA-256 Hash Generator'
      }
    case 'title-case-converter':
      return {
        title: 'Title Case Converter'
      }
    case 'upper-case-converter':
      return {
        title: 'Upper Case Converter'
      }
    case 'word-frequency':
      return {
        title: 'Word Frequency'
      }
    default:
      return {
        title: 'Notepad'
      }
  }
}

export default async function Page({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params
  switch (tool) {
    case 'alternating-case-converter':
      return <AlternatingCaseConverterComponent />
    case 'base64-decode':
      return <Base64DecodeComponent />
    case 'base64-encode':
      return <Base64EncodeComponent />
    case 'capitalized-case-converter':
      return <CapitalizedCaseConverterComponent />
    case 'inverse-case-converter':
      return <InverseCaseConverterComponent />
    case 'lower-case-converter':
      return <LowerCaseConverterComponent />
    case 'md5-hash-generator':
      return <MD5HashGeneratorComponent />
    case 'sentence-case-converter':
      return <SentenceCaseConverterComponent />
    case 'sha-1-hash-generator':
      return <SHA1HashGeneratorComponent />
    case 'sha-256-hash-generator':
      return <SHA256HashGeneratorComponent />
    case 'title-case-converter':
      return <TitleCaseConverterComponent />
    case 'upper-case-converter':
      return <UpperCaseConverterComponent />
    case 'word-frequency':
      return <WordFrequencyComponent />
    default:
      return <NotepadComponent />
  }
}
