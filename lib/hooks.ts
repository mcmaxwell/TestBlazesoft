'use client'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'
import { ChangeEvent, useState } from 'react'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        error,
        onChange: handleChange,
        setError,
    }
}

export const useTextarea = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return {
        value,
        error,
        onChange: handleChange,
        setError,
    }
}
