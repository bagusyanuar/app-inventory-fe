import React from 'react'
import type { IWrapper } from './types'
const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <nav className='w-full h-16 px-3 flex items-center justify-between bg-white border-b border-gray-300'>
            {children}
        </nav>
    )
}

export default Wrapper