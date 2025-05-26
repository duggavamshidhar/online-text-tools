import { toast } from 'sonner'

export function changeTextToSentenceCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to sentence case.')
    return text
  }

  const textParts: string[] = text.split(/([.!?]+)/)
  const formattedSentences: string[] = []

  for (let i = 0; i < textParts.length; i += 2) {
    const sentenceText: string = textParts[i]?.trim()
    const endingPunctuation = textParts[i + 1] || ''

    if (sentenceText) {
      const lowerCaseSentence: string = sentenceText.toLowerCase()
      const capitalizedSentence: string =
        lowerCaseSentence.charAt(0).toUpperCase() + lowerCaseSentence.slice(1)
      formattedSentences.push(capitalizedSentence + endingPunctuation)
    }
  }

  return formattedSentences.join(' ')
}

export function changeTextToUpperCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to uppercase.')
    return text
  }

  return text.toUpperCase()
}

export function changeTextToLowerCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to lowercase.')
    return text
  }

  return text.toLowerCase()
}

export function changeTextToCapitalizedCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to capitalized case.')
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

export function changeTextToTitleCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to title case.')
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
    'for',
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

export function changeTextToAlternatingCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to alternating case.')
    return text
  }

  return text
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('')
}

export function changeTextToInverseCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to inverse case.')
    return text
  }

  return text
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('')
}

export function encodeToBase64(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to encode to Base64.')
    return text
  }

  try {
    const encodedText = btoa(text)
    toast.success('Text has been encoded successfully.')
    return encodedText
  } catch (err) {
    toast.error('Invalid Text format.')
    console.error(err)
    return text
  }
}

export function decodeFromBase64(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to decode from Base64.')
    return text
  }

  try {
    const decodedText = atob(text)
    toast.success('Text has been decoded successfully.')
    return decodedText
  } catch (err) {
    toast.error('Invalid Base64 string.')
    console.error(err)
    return text
  }
}
