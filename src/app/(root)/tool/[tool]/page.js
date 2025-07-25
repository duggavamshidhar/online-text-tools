import { redirect } from 'next/navigation'

import MainComponent from '@/components/main-component'
import AlternatingCaseConverterComponent from '@/components/text-tool-components/alternating-case-converter-component'
import Base64DecodeComponent from '@/components/text-tool-components/base64-decode-component'
import Base64EncodeComponent from '@/components/text-tool-components/base64-encode-component'
import CapitalizedCaseConverterComponent from '@/components/text-tool-components/capitalized-case-converter-component'
import CharacterCountComponent from '@/components/text-tool-components/character-count-component'
import InverseCaseConverterComponent from '@/components/text-tool-components/inverse-case-converter-component'
import LowerCaseConverterComponent from '@/components/text-tool-components/lower-case-converter-component'
import MD5HashGeneratorComponent from '@/components/text-tool-components/md5-hash-generator-component'
import SentenceCaseConverterComponent from '@/components/text-tool-components/sentence-case-converter-component'
import SHA1HashGeneratorComponent from '@/components/text-tool-components/sha-1-hash-generator-component'
import SHA256HashGeneratorComponent from '@/components/text-tool-components/sha-256-hash-generator-component'
import TitleCaseConverterComponent from '@/components/text-tool-components/title-case-converter-component'
import UpperCaseConverterComponent from '@/components/text-tool-components/upper-case-converter-component'
import WordFrequencyComponent from '@/components/text-tool-components/word-frequency-component'

export async function generateMetadata({ params }) {
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
    case 'character-count':
      return {
        title: 'Character Count'
      }
    case 'word-frequency':
      return {
        title: 'Word Frequency'
      }
  }
}

export default async function Page({ params }) {
  const { tool } = await params
  switch (tool) {
    case 'alternating-case-converter':
      return (
        <MainComponent
          title="Alternating Case Converter"
          component={<AlternatingCaseConverterComponent />}
        />
      )

    case 'base64-decode':
      return <MainComponent title="Base64 Decode" component={<Base64DecodeComponent />} />
    case 'base64-encode':
      return <MainComponent title="Base64 Encode" component={<Base64EncodeComponent />} />

    case 'capitalized-case-converter':
      return (
        <MainComponent
          title="Capitalized Case Converter"
          component={<CapitalizedCaseConverterComponent />}
        />
      )
    case 'inverse-case-converter':
      return (
        <MainComponent
          title="Inverse Case Converter"
          component={<InverseCaseConverterComponent />}
        />
      )
    case 'lower-case-converter':
      return (
        <MainComponent title="Lower Case Converter" component={<LowerCaseConverterComponent />} />
      )
    case 'md5-hash-generator':
      return <MainComponent title="MD5 Hash Generator" component={<MD5HashGeneratorComponent />} />
    case 'sentence-case-converter':
      return (
        <MainComponent
          title="Sentence Case Converter"
          component={<SentenceCaseConverterComponent />}
        />
      )
    case 'sha-1-hash-generator':
      return (
        <MainComponent title="SHA-1 Hash Generator" component={<SHA1HashGeneratorComponent />} />
      )
    case 'sha-256-hash-generator':
      return (
        <MainComponent
          title="SHA-256 Hash Generator"
          component={<SHA256HashGeneratorComponent />}
        />
      )
    case 'title-case-converter':
      return (
        <MainComponent title="Title Case Converter" component={<TitleCaseConverterComponent />} />
      )
    case 'upper-case-converter':
      return (
        <MainComponent title="Upper Case Converter" component={<UpperCaseConverterComponent />} />
      )
    case 'character-count':
      return <MainComponent title="Character Count" component={<CharacterCountComponent />} />
    case 'word-frequency':
      return <MainComponent title="Word Frequency" component={<WordFrequencyComponent />} />
    default:
      return redirect('/')
  }
}
