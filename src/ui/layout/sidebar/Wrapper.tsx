import React from 'react'
import type { IWrapper } from './types'
import { LuChevronLeft } from 'react-icons/lu'

const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <aside className='w-60 h-dvh absolute top-0 left-0 bg-white border-r border-gray-300 flex flex-col'>
            {children}
            <div className='absolute top-5 right-0 translate-x-1/2 h-6 w-6 flex items-center justify-center rounded-lg bg-white border border-neutral-300 cursor-pointer'>
                <LuChevronLeft size={16} className='text-neutral-700' />
            </div>
        </aside>
    )
}

export default Wrapper