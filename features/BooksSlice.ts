import { books } from '@/lib/data'
import { IBookProps } from '@/lib/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
    bookList: books,
}

export const BookSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addBook: (state, action: PayloadAction<IBookProps>) => {
            const book = action.payload
            state.bookList.find((i: IBookProps) => i.id === book.id)
            state.bookList.unshift(book)

            toast.success('Item added to list')
        },
        removeBook: (state, action: PayloadAction<string>) => {
            const bookID = action.payload
            const book = state.bookList.find((i: IBookProps) => i.id === bookID)
            state.bookList = state.bookList.filter(
                (i: IBookProps) => i.id !== bookID
            )
            toast.error('Item removed from list')
        },
        editBook: (state, action: PayloadAction<IBookProps>) => {
            const book = action.payload

            const bookIndex = state.bookList.findIndex(
                (i: IBookProps) => i.id === book.id
            )

            state.bookList[bookIndex] = book

            toast.success('List updated')
        },
    },
})

export const { addBook, removeBook, editBook } = BookSlice.actions

export default BookSlice.reducer
