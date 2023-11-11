'use client'

import BooksList from '@/components/BooksList'
import { ToastContainer } from 'react-toastify'
import { store } from './store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
    return (
        <Provider store={store}>
            <BooksList />
            <ToastContainer position='top-right' />
        </Provider>
    )
}
