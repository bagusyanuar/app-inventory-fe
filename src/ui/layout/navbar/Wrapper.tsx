import React from 'react'
import type { IWrapper } from './types'
const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <nav className='w-full h-[4.5rem] px-5 flex items-center justify-between bg-white border-b border-gray-300'>
            {children}
        </nav>
    )
}

export default Wrapper