import React from 'react'
import type { IPageTitle } from './types'

const PageTitle: React.FC<IPageTitle> = ({
    text
}) => {
    return (
        <h1 className='text-2xl text-neutral-700 font-semibold'>{text}</h1>
    )
}

export default PageTitle