import { configureStore } from '@reduxjs/toolkit'

import { BookSlice } from '../features/BooksSlice'

export const store = configureStore({
    reducer: {
        booksState: BookSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
