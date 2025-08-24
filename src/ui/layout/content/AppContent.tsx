import React from 'react'
import type { IAppContent } from './types'

const AppContent: React.FC<IAppContent> = ({
    children
}) => {
    return (
        <main className='p-5'>
            {children}
        </main>
    )
}

export default AppContent