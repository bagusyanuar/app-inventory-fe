import React from 'react'
import type { IFullPageLoader } from './types'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

const FullPageLoader: React.FC<IFullPageLoader> = ({
    show,
    text = 'Loading...'
}) => {
    return (
        <div className={twMerge(
            'w-full h-dvh z-50 bg-black/50 absolute left-0 top-0 flex items-center justify-center',
            !show && 'hidden'
        )}>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-64 h-40 bg-white rounded shadow'
            >
                {text}
            </motion.div>
        </div>
    )
}

export default FullPageLoader