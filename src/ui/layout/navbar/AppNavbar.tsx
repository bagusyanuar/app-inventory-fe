import React from 'react'
import type { IAppNavbar } from './types'

const AppNavbar: React.FC<IAppNavbar> = ({
    children
}) => {
    return (
        <nav className='w-full h-[4rem] px-5 flex items-center justify-between bg-white border-b border-gray-300'>
            {children}
        </nav>
    )
}

export default AppNavbar