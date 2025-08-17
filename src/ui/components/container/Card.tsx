import React from 'react'
import type { ICard } from './types'
import { twMerge } from 'tailwind-merge';
const Card: React.FC<ICard> = ({ children, className }) => {
    return (
        <div className={twMerge('bg-white rounded-lg p-4', className)}>
            {children}
        </div>
    )
}

export default Card