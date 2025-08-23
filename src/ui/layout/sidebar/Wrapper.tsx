import React from 'react'
import type { IWrapper } from './types'

const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <aside className='w-60 h-dvh absolute top-0 left-0 bg-white border-r border-gray-300 flex flex-col'>
            {children}
        </aside>
    )
}

export default Wrapper