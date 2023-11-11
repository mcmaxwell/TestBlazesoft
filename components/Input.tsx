import { IInputProps } from '@/lib/types'
import { FC } from 'react'

const Input: FC<IInputProps> = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
    required = false,
}) => {
    return (
        <div className='mb-4'>
            <label
                htmlFor={label}
                className='block text-gray-700 text-sm font-bold mb-2'
            >
                <span>{label}</span>
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type={type}
                    id={label}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                />
            </label>
            {error && (
                <p className='error text-red-700'>
                    Input filed can&apos;t be empty!
                </p>
            )}
        </div>
    )
}

export default Input
