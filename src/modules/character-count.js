export function handleCharacterCount(text) {
  return text.length
}

const whitespaceRegex = /\s/g

export function handleCharacterCountWithoutSpaces(text) {
  return text.replace(whitespaceRegex, '').length
}

const whitespaceDelimiterRegex = /\s+/

export function handleWordCount(text) {
  const trimmedText = text.trim()
  if (!trimmedText) return 0
  return trimmedText.split(whitespaceDelimiterRegex).filter((word) => word.length > 0).length
}

const sentenceDelimiterRegex = /[.!?]+/

export function handleSentenceCount(text) {
  if (!text.trim()) return 0
  return text.split(sentenceDelimiterRegex).filter((sentence) => sentence.trim().length > 0).length
}

export function handleLineCount(text) {
  if (!text.trim()) return 0
  return text.split('\n').filter((line) => line.trim().length > 0).length
}
