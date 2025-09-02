import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import type { IPagination } from './types'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const Pagination: React.FC<IPagination> = ({
    pageSize = [10, 25, 50],
    totalRows = 0,
    selectedPage = 0
}) => {
    const [shownPages, setShownPages] = useState<number[]>([1, 2, 3])

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <span className='text-xs text-neutral-700'>Total Rows : {totalRows}</span>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                    <span className='text-xs text-neutral-700'>Rows Per Page :</span>
                    <select className='text-xs focus:outline-none text-neutral-700 border border-neutral-300 rounded py-0.5'>
                        {
                            pageSize.map((v, k) => {
                                return (
                                    <option key={k} value={v}>{v}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex items-center gap-1 text-neutral-700'>
                    <button className='w-6 h-6 rounded focus:outline-none flex items-center justify-center cursor-pointer hover:bg-brand-500 hover:text-white transition-colors ease-in duration-200'>
                        <LuChevronLeft size={12} />
                    </button>
                    {
                        shownPages.map((v, k) => {
                            return (
                                <button
                                    key={k}
                                    className={twMerge(
                                        'w-6 h-6 rounded focus:outline-none flex items-center justify-center cursor-pointer hover:bg-brand-500 hover:text-white transition-colors ease-in duration-200',
                                        selectedPage === v ? 'text-white bg-brand-500' : 'bg-white text-brand-500'
                                    )}>
                                    <span className='text-xs'>{v}</span>
                                </button>
                            )
                        })
                    }
                    <button className='w-6 h-6 rounded focus:outline-none flex items-center justify-center cursor-pointer hover:bg-brand-500 hover:text-white transition-colors ease-in duration-200'>
                        <LuChevronRight size={12} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination