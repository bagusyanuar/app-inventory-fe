import React from 'react'
import type { IPageSubTitle } from './types'
import { twMerge } from 'tailwind-merge'

const PageSubTitle: React.FC<IPageSubTitle> = ({
    text,
    className = ''
}) => {
    return (
        <h1 className={twMerge('text-xs text-neutral-700 leading-none', className)}>{text}</h1>
    )
}

export default PageSubTitle