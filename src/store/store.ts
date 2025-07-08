import { configureStore } from '@reduxjs/toolkit'

import textReducer from '@/store/text-slice'

export const store = configureStore({
  reducer: {
    text: textReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
