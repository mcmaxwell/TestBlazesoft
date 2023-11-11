import { ChangeEvent, FC } from 'react'

interface TextareaProps {
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

const Textarea: FC<TextareaProps> = ({
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
    maxLength = 500,
    required = false,
}) => {
    return (
        <div className='input-wrapper mb-4'>
            <label
                htmlFor={label}
                className='block text-gray-700 text-sm font-bold mb-2'
            >
                <span>{label}</span>
                <textarea
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id={label}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    maxLength={maxLength}
                    rows={6}
                />
            </label>
            {error && <p className='error'>Input filed can&apos;t be empty!</p>}
        </div>
    )
}

export default Textarea
