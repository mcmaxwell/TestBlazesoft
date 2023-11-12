import { ChangeEvent, ReactNode } from 'react'

export interface IBooksProps {
    IBook: IBookProps
    key: string
}

export interface IBookProps {
    id: string
    name: string
    price: string
    category: string
    description: string
}

export interface IModalProps {
    isOpen: boolean
    onClose(arg0: boolean): void
    children: ReactNode
}

export interface IInputProps {
    type: 'text' | 'number'
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
}

export interface ITextareaProps {
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    maxLength?: number
    required?: boolean
}
