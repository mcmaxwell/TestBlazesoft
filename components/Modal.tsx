'use client'
import { IModalProps } from '@/lib/types'

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <div className='modal-wrapper flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0'>
            <div
                className='modal-overlay absolute top-0 right-0 left-0 bottom-0 z-10  max-h-full bg-black/30 backdrop-blur-sm'
                onClick={() => onClose(false)}
            ></div>
            <div className='modal-content relative w-[600px] p-4 z-50'>
                {children}
                <button
                    className='text-gray-400 bg-transparent py-2 px-4 rounded hover:bg-gray-200 hover:text-gray-900 bg-slate-50'
                    onClick={() => onClose(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
export default Modal
