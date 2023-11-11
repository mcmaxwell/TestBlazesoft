'use client'
import { FC, useState } from 'react'
import Book from './Book'

import { useAppSelector } from '@/lib/hooks'
import Form from './Form'
import Modal from './Modal'
import { nanoid } from 'nanoid'
import { IBookProps } from '@/lib/types'

const BooksList: FC = () => {
    const [showModal, setShowModal] = useState(false)

    const books = useAppSelector((state) => state.booksState.bookList)
    const defaultProps: IBookProps = {
        id: nanoid(),
        name: '',
        price: '0.00',
        category: '',
        description: '',
    }

    return (
        <div className='wrapper'>
            <div className='flex justify-center m-10'>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() =>
                        setShowModal((prevShowModal) => !prevShowModal)
                    }
                >
                    Add book
                </button>
            </div>
            <div className='books-list grid grid-cols-1 md:grid-cols-3 gap-4 m-3'>
                {books.map((book) => (
                    <Book
                        {...book}
                        key={book.id}
                    />
                ))}
            </div>
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={setShowModal}
                >
                    <Form
                        {...defaultProps}
                        setShowModal={setShowModal}
                    />
                </Modal>
            )}
        </div>
    )
}

export default BooksList
