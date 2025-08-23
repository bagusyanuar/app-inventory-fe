import React from 'react'
import type { IWrapper } from './types'
const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <main className='ps-60'>
            {children}
        </main>
    )
}

export default Wrapper