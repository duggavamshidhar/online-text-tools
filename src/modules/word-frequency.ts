import { UpdateWordFrequencyProps } from '@/components/text-tool-components/word-frequency-component'

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
