import { UpdateWordFrequencyProps } from '@/components/word-frequency-components/word-frequency-counter-component'

export function handleCharacterCount(text: string): number {
  return text.length
}

const whitespaceRegex = /\s/g

export function handleCharacterCountWithoutSpaces(text: string): number {
  return text.replace(whitespaceRegex, '').length
}

const whitespaceDelimiterRegex = /\s+/

export function handleWordCount(text: string): number {
  const trimmedText = text.trim()
  if (!trimmedText) return 0
  return trimmedText.split(whitespaceDelimiterRegex).filter((word) => word.length > 0).length
}

const sentenceDelimiterRegex = /[.!?]+/

export function handleSentenceCount(text: string): number {
  if (!text.trim()) return 0
  return text.split(sentenceDelimiterRegex).filter((sentence) => sentence.trim().length > 0).length
}

export function handleLineCount(text: string): number {
  if (!text.trim()) return 0
  return text.split('\n').filter((line) => line.trim().length > 0).length
}

const wordRegex = /\b\w+\b/g

export function updateWordFrequency(text: string): UpdateWordFrequencyProps[] {
  if (!text.trim()) {
    return []
  }

  const words = text.toLowerCase().match(wordRegex)
  if (!words) return []

  const frequency: Record<string, number> = {}
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  return Object.entries(frequency)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
}
