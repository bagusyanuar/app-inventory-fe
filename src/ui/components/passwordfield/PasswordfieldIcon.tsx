import React, { useState, type HTMLInputTypeAttribute } from 'react'
import type { IPaswordfieldIcons } from './types'
import { twMerge } from 'tailwind-merge'
import { LuEye, LuEyeOff } from 'react-icons/lu'

const PasswordfieldIcon: React.FC<IPaswordfieldIcons> = ({
    prefixIcon,
    className = '',
    placeholder = ''
}) => {

    const [type, setType] = useState<HTMLInputTypeAttribute>('password')

    const handleChangeType = () => {
        if (type === 'text') {
            setType('password')
        }

        if (type === 'password') {
            setType('text')
        }
    }
    return (
        <div
            className={twMerge('flex items-center border border-neutral-500 rounded px-3', className)}>
            {
                prefixIcon && <div className='me-2.5 text-neutral-700'>
                    {prefixIcon}
                </div>
            }
            <input
                type={type}
                placeholder={placeholder}
                className={twMerge(
                    'flex-1 py-2.5 focus:ring-0 focus:outline-none text-sm text-neutral-700',
                    !prefixIcon && 'ps-3',
                )} />
            <div
                className='ms-2.5 text-neutral-700 cursor-pointer'
                onClick={handleChangeType}
            >
                {type === 'text' ? <LuEyeOff size={16} /> : <LuEye size={16} />}
            </div>
        </div>
    )
}

export default PasswordfieldIcon