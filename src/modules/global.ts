import { toast } from 'sonner'

export function handleCharacterCount(text: string): number {
  return text.length
}

export function handleWordCount(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length
}

export function handleSentenceCount(text: string): number {
  return text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length
}

export function handleLineCount(text: string): number {
  return text.split('\n').length
}

export function copyToClipboard(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Copied to clipboard successfully.'))
    .catch(() => toast.error('Failed to copy to clipboard.'))
}

export function cutToClipboard(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Cut to clipboard successfully.'))
    .catch(() => toast.error('Failed to cut to clipboard.'))
}

export function resetTextArea(): void {
  toast.success('Text area has been reset.')
}

export function downloadAsFile(text: string, fileName: string = 'myFile.txt') {
  const blobPart: BlobPart[] = text.split('')
  console.log(blobPart)
  const blob = new Blob(blobPart, { type: 'text/plain' })
  const createLink = document.createElement('a')
  createLink.download = fileName
  createLink.href = URL.createObjectURL(blob)
  createLink.click()
  toast.success('Your file is downloading...')
  URL.revokeObjectURL(createLink.href)
}
