'use client'

import { create } from 'zustand'

export const useTextFieldStore = create((set) => ({
  text: '',
  setText: (text) => set({ text })
}))
