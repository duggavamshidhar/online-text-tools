import MainComponent from '@/components/main-component'
import AlternatingCaseConverterComponent from '@/components/text-tool-components/alternating-case-converter-component'
import Base64DecodeComponent from '@/components/text-tool-components/base64-decode-component'
import Base64EncodeComponent from '@/components/text-tool-components/base64-encode-component'
import CapitalizedCaseConverterComponent from '@/components/text-tool-components/capitalized-case-converter-component'
import InverseCaseConverterComponent from '@/components/text-tool-components/inverse-case-converter-component'
import LowerCaseConverterComponent from '@/components/text-tool-components/lower-case-converter-component'
import MD5HashGeneratorComponent from '@/components/text-tool-components/md5-hash-generator-component'
import SentenceCaseConverterComponent from '@/components/text-tool-components/sentence-case-converter-component'
import SHA1HashGeneratorComponent from '@/components/text-tool-components/sha-1-hash-generator-component'
import SHA256HashGeneratorComponent from '@/components/text-tool-components/sha-256-hash-generator-component'
import TitleCaseConverterComponent from '@/components/text-tool-components/title-case-converter-component'
import UpperCaseConverterComponent from '@/components/text-tool-components/upper-case-converter-component'

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
      return (
        <MainComponent
          title="Alternating Case Converter"
          customTool={<AlternatingCaseConverterComponent />}
        />
      )
    case 'base64-decode':
      return <MainComponent title="Base64 Decode" customTool={<Base64DecodeComponent />} />
    case 'base64-encode':
      return <MainComponent title="Base64 Encode" customTool={<Base64EncodeComponent />} />

    case 'capitalized-case-converter':
      return (
        <MainComponent
          title="Capitalized Case Converter"
          customTool={<CapitalizedCaseConverterComponent />}
        />
      )
    case 'inverse-case-converter':
      return (
        <MainComponent
          title="Inverse Case Converter"
          customTool={<InverseCaseConverterComponent />}
        />
      )
    case 'lower-case-converter':
      return (
        <MainComponent title="Lower Case Converter" customTool={<LowerCaseConverterComponent />} />
      )
    case 'md5-hash-generator':
      return <MainComponent title="MD5 Hash Generator" customTool={<MD5HashGeneratorComponent />} />
    case 'sentence-case-converter':
      return (
        <MainComponent
          title="Sentence Case Converter"
          customTool={<SentenceCaseConverterComponent />}
        />
      )
    case 'sha-1-hash-generator':
      return (
        <MainComponent title="SHA-1 Hash Generator" customTool={<SHA1HashGeneratorComponent />} />
      )
    case 'sha-256-hash-generator':
      return (
        <MainComponent
          title="SHA-256 Hash Generator"
          customTool={<SHA256HashGeneratorComponent />}
        />
      )
    case 'title-case-converter':
      return (
        <MainComponent title="Title Case Converter" customTool={<TitleCaseConverterComponent />} />
      )
    case 'upper-case-converter':
      return (
        <MainComponent title="Upper Case Converter" customTool={<UpperCaseConverterComponent />} />
      )
    default:
      return <MainComponent title="Notepad" />
  }
}
