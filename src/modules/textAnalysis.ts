import { UpdateWordFrequencyProps } from '@/components/word-frequency-counter-component'

export function handleCharacterCount(text: string): number {
  return text.length
}

export function handleCharacterCountWithoutSpaces(text: string): number {
  return text.replace(/\s/g, '').length
}

export function handleWordCount(text: string): number {
  const trimmedText = text.trim()
  if (!trimmedText) return 0
  return trimmedText.split(/\s+/).filter((word) => word.length > 0).length
}

export function handleSentenceCount(text: string): number {
  if (!text.trim()) return 0
  return text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length
}

export function handleLineCount(text: string): number {
  if (!text.trim()) return 0
  return text.split('\n').filter((line) => line.trim().length > 0).length
}

export function updateWordFrequency(text: string): UpdateWordFrequencyProps[] {
  if (!text.trim()) {
    return []
  }

  const words = text.toLowerCase().match(/\b\w+\b/g)
  if (!words) return []

  const frequency: Record<string, number> = {}
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  return Object.entries(frequency)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
}
