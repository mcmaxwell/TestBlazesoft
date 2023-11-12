import { IBookProps } from '@/lib/types'
import Input from './Input'
import Textarea from './Textarea'
import { nanoid } from 'nanoid'
import { useAppDispatch, useInput, useTextarea } from '@/lib/hooks'
import { addBook, editBook } from '@/features/BooksSlice'
import { Dispatch, FormEvent, SetStateAction } from 'react'

interface FromProps extends IBookProps {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

const Form: React.FC<FromProps> = ({ setShowModal, ...data }) => {
    const { id, name, price, category, description } = data
    const dispatch = useAppDispatch()
    const bookName = useInput(name ? name : '')
    const bookPrice = useInput(price ? price : '0.00')
    const bookCategory = useInput(category ? category : 'Mystery')
    const bookDescription = useTextarea(description ? description : '')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        const book = {
            id: id ? id : nanoid(),
            name: bookName.value,
            price: bookPrice.value,
            category: bookCategory.value,
            description: bookDescription.value,
        }

        if (name) {
            dispatch(editBook(book))
            setShowModal(false)
        } else {
            dispatch(addBook(book))
            setShowModal(false)
        }
    }

    return (
        <div className='w-full'>
            <form
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                onSubmit={(e) => onSubmit(e)}
            >
                <Input
                    label='Book name:'
                    type='text'
                    name='name'
                    placeholder='Book name'
                    required
                    {...bookName}
                />
                <Input
                    label='Book price:'
                    type='number'
                    name='price'
                    placeholder='Book price'
                    required
                    {...bookPrice}
                />
                <Input
                    label='Book category:'
                    type='text'
                    name='category'
                    placeholder='Book category'
                    required
                    {...bookCategory}
                />
                <Textarea
                    label='Book description:'
                    name='description'
                    placeholder='Book description'
                    {...bookDescription}
                />
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    type='submit'
                >
                    Save Book
                </button>
            </form>
        </div>
    )
}
export default Form
