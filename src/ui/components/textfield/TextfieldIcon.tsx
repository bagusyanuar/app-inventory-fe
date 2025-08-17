import React from 'react'
import type { ITextfieldIcons } from './types'
import { twMerge } from 'tailwind-merge'

const TextfieldIcon: React.FC<ITextfieldIcons> = ({
    prefixIcon,
    suffixIcon,
    className = '',
    placeholder = ''
}) => {
    return (
        <div
            className={twMerge('flex items-center border border-neutral-500 rounded ps-3', className)}>
            {
                prefixIcon && <div className='me-2.5 text-neutral-700'>
                    {prefixIcon}
                </div>
            }
            <input
                placeholder={placeholder}
                className={twMerge(
                    'flex-1 py-2.5 focus:ring-0 focus:outline-none text-sm text-neutral-700',
                    !prefixIcon && 'ps-3',
                    !suffixIcon && 'pe-3'
                )} />
            {
                suffixIcon && <div className='ms-2.5 text-neutral-700'>
                    {suffixIcon}
                </div>
            }
        </div>
    )
}

export default TextfieldIcon