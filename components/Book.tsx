'use client'

import { IBookProps } from '@/lib/types'
import { removeBook } from '../features/BooksSlice'
import { useAppDispatch } from '@/lib/hooks'
import { useState } from 'react'
import Modal from './Modal'
import Form from './Form'

const Book = (book: IBookProps, key: string) => {
    const [showModal, setShowModal] = useState(false)

    const { id, name, price, category, description } = book
    const dispatch = useAppDispatch()

    const handlerRemoveBook = () => {
        dispatch(removeBook(id))
    }

    const editBook = () => {
        setShowModal(true)
    }

    return (
        <>
            <div
                className='book bg-white border border-gray-200 rounded-lg shadow p-5 cursor-pointer flex flex-col'
                key={key}
            >
                <button className='text-left' onClick={() => editBook()}>
                    <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 break-words'>
                        {name}
                    </h4>
                    <span>{price}</span>
                    <div>{category}</div>
                    <div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                        {description}
                    </div>
                </button>

                <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-auto'
                    onClick={handlerRemoveBook}
                >
                    Remove
                </button>
            </div>

            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={setShowModal}
                >
                    <Form
                        setShowModal={setShowModal}
                        {...book}
                    />
                </Modal>
            )}
        </>
    )
}
export default Book
