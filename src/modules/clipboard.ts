import { toast } from 'sonner'

function validateClipboardText(text: string, errorMessage: string): boolean {
  if (!text.trim()) {
    toast.error(errorMessage)
    return false
  }
  return true
}

export function copyToClipboard(text: string): void {
  if (!validateClipboardText(text, 'Please enter some text to copy to clipboard.')) {
    return
  }

  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Copied to clipboard successfully.'))
    .catch(() => toast.error('Failed to copy to clipboard.'))
}

export function cutToClipboard(text: string): void {
  if (!validateClipboardText(text, 'Please enter some text to cut to clipboard.')) {
    return
  }

  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Cut to clipboard successfully.'))
    .catch(() => toast.error('Failed to cut to clipboard.'))
}

export function resetTextArea(text: string): string {
  if (!validateClipboardText(text, 'Please enter some text to reset.')) {
    return ''
  }

  toast.success('Text area has been reset.')
  return ''
}

export function downloadAsFile(text: string, fileName = 'myFile.txt'): void {
  if (!validateClipboardText(text, 'Please enter some text to download as a text file.')) {
    return
  }

  const fileBlob = new Blob([text], { type: 'text/plain' })
  const downloadLink = document.createElement('a')
  downloadLink.download = fileName
  downloadLink.href = URL.createObjectURL(fileBlob)
  downloadLink.click()
  toast.success('Your file is downloading...')
  URL.revokeObjectURL(downloadLink.href)
}
