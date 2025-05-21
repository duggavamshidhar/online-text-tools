import { toast } from 'sonner'

export function handleCharacterCount(text: string): number {
  return text.length
}

export function handleCharacterCountWithSpaces(text: string): number {
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

export function copyToClipboard(text: string): void {
  if (!text.trim()) {
    toast.error('Please enter some text to copy to clipboard.')
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Copied to clipboard successfully.'))
      .catch(() => toast.error('Failed to copy to clipboard.'))
  }
}

export function cutToClipboard(text: string): void {
  if (!text.trim()) {
    toast.error('Please enter some text to cut to clipboard.')
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success('Cut to clipboard successfully.'))
      .catch(() => toast.error('Failed to cut to clipboard.'))
  }
}

export function resetTextArea(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to reset.')
    return ''
  } else {
    toast.success('Text area has been reset.')
    return ''
  }
}

export function downloadAsFile(text: string, fileName: string = 'myFile.txt'): void {
  if (!text.trim()) {
    toast.error('Please enter some text to download as a text file.')
  } else {
    const fileBlob = new Blob([text], { type: 'text/plain' })
    const downloadLink = document.createElement('a')
    downloadLink.download = fileName
    downloadLink.href = URL.createObjectURL(fileBlob)
    downloadLink.click()
    toast.success('Your file is downloading...')
    URL.revokeObjectURL(downloadLink.href)
  }
}

export function changeTextToSentenceCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to sentence case.')
    return text
  }
  const textParts: string[] = text.split(/([.!?]+)/)
  const formattedSentences: string[] = []
  for (let i: number = 0; i < textParts.length; i += 2) {
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
    .map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    })
    .join('')
}

export function changeTextToInverseCase(text: string): string {
  if (!text.trim()) {
    toast.error('Please enter some text to convert to inverse case.')
    return text
  }
  return text
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase()
      } else {
        return char.toUpperCase()
      }
    })
    .join('')
}
