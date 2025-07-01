'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TextFieldStore {
  text: string
  setText: (text: string) => void
}

export const useTextFieldStore = create<TextFieldStore>()(
  persist(
    (set) => ({
      text: '',
      setText: (text) => set({ text })
    }),
    {
      name: 'text-field-store'
    }
  )
)
