import { toast } from 'sonner'

export function validateClipboardText(text, errorMessage) {
  if (!text.trim()) {
    toast.error(errorMessage)
    return false
  }
  return true
}

export function copyToClipboard(text) {
  if (!validateClipboardText(text, 'Please enter some text to copy to clipboard.')) {
    return
  }
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Copied to clipboard successfully.'))
    .catch(() => toast.error('Failed to copy to clipboard.'))
}

export function cutToClipboard(text) {
  if (!validateClipboardText(text, 'Please enter some text to cut to clipboard.')) {
    return
  }
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success('Cut to clipboard successfully.'))
    .catch(() => toast.error('Failed to cut to clipboard.'))
}

export function resetTextArea(text) {
  if (!validateClipboardText(text, 'Please enter some text to reset.')) {
    return ''
  }
  toast.success('Text area has been reset.')
  return ''
}

export function downloadAsFile(text, fileName = 'myFile.txt') {
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
