import React from 'react'
import type { IWrapper } from './types'
const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <nav className='py-3 w-full'>
            <div className='w-full h-16 flex items-center justify-between'>
                {children}
            </div>
        </nav>
    )
}

export default Wrapper