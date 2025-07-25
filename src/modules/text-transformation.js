import md5 from 'md5'
import { toast } from 'sonner'

function validateText(text, errorMessage) {
  if (!text.trim()) {
    toast.error(errorMessage)
    return false
  }
  return true
}

const sentenceSplitRegex = /([.!?]+)/

export function changeTextToSentenceCase(text) {
  if (!validateText(text, 'Please enter some text to convert to sentence case.')) {
    return text
  }

  const textParts = text.split(sentenceSplitRegex)
  const formattedSentences = []

  for (let i = 0; i < textParts.length; i += 2) {
    const sentenceText = textParts[i]?.trim()
    const endingPunctuation = textParts[i + 1] || ''

    if (sentenceText) {
      const lowerCaseSentence = sentenceText.toLowerCase()
      const capitalizedSentence =
        lowerCaseSentence.charAt(0).toUpperCase() + lowerCaseSentence.slice(1)
      formattedSentences.push(capitalizedSentence + endingPunctuation)
    }
  }

  return formattedSentences.join(' ')
}

export function changeTextToUpperCase(text) {
  if (!validateText(text, 'Please enter some text to convert to uppercase.')) {
    return text
  }

  return text.toUpperCase()
}

export function changeTextToLowerCase(text) {
  if (!validateText(text, 'Please enter some text to convert to lowercase.')) {
    return text
  }

  return text.toLowerCase()
}

export function changeTextToCapitalizedCase(text) {
  if (!validateText(text, 'Please enter some text to convert to capitalized case.')) {
    return text
  }

  return text
    .split(' ')
    .map((word) => {
      if (word.length === 0) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

export function changeTextToTitleCase(text) {
  if (!validateText(text, 'Please enter some text to convert to title case.')) {
    return text
  }

  const minorWords = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'nor',
    'for',
    'as',
    'at',
    'by',
    'from',
    'in',
    'into',
    'near',
    'of',
    'on',
    'onto',
    'to',
    'with'
  ]

  const words = text.toLowerCase().split(' ')

  return words
    .map((word, index) => {
      const isFirstWord = index === 0
      const isLastWord = index === words.length - 1
      const isSignificantWord = !minorWords.includes(word)

      if (isFirstWord || isLastWord || isSignificantWord) {
        return word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
      }

      return word
    })
    .join(' ')
}

export function changeTextToAlternatingCase(text) {
  if (!validateText(text, 'Please enter some text to convert to alternating case.')) {
    return text
  }

  return text
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('')
}

export function changeTextToInverseCase(text) {
  if (!validateText(text, 'Please enter some text to convert to inverse case.')) {
    return text
  }

  return text
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('')
}

export function encodeToBase64(text) {
  if (!validateText(text, 'Please enter some text to encode to Base64.')) {
    return text
  }

  try {
    const encodedText = btoa(text)
    toast.success('Text has been encoded successfully.')
    return encodedText
  } catch {
    toast.error('Invalid Text format.')
    return text
  }
}

export function decodeFromBase64(text) {
  if (!validateText(text, 'Please enter some text to decode from Base64.')) {
    return text
  }

  try {
    const decodedText = atob(text)
    toast.success('Text has been decoded successfully.')
    return decodedText
  } catch {
    toast.error('Invalid Base64 string.')
    return text
  }
}

export function md5HashGenerator(text) {
  if (!validateText(text, 'Please enter some text to generate MD5 hash.')) {
    return text
  }

  try {
    const hash = md5(text)
    toast.success('MD5 hash has been generated successfully.')
    return hash
  } catch {
    toast.error('Error generating MD5 hash.')
    return text
  }
}

export async function sha1HashGenerator(text) {
  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(text)
    const hashBuffer = await crypto.subtle.digest('SHA-1', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
    toast.success('SHA-1 hash has been generated successfully.')
    return hashHex
  } catch {
    toast.error('Error generating SHA-1 hash.')
    return text
  }
}

export async function sha256HashGenerator(text) {
  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(text)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
    toast.success('SHA-1 hash has been generated successfully.')
    return hashHex
  } catch {
    toast.error('Error generating SHA-1 hash.')
    return text
  }
}
