import React from 'react'
import type { IHeader } from './types'
import { twMerge } from 'tailwind-merge'
import { LuArrowUpDown } from 'react-icons/lu'

const Header = <T,>({
    columns
}: IHeader<T>) => {
    return (
        <thead>
            <tr className='rounded-md bg-muted border-b border-neutral-300'>
                {
                    columns.map((header, key) => {
                        let alignClass = 'justify-start';
                        switch (header.align) {
                            case 'center':
                                alignClass = 'justify-center'
                                break;
                            case 'end':
                                alignClass = 'justify-end'
                                break;
                            default:
                                break;
                        }
                        return (
                            <th
                                key={key}
                                className={twMerge(
                                    'font-normal text-sm',
                                    header.headerClassName,
                                    header.width
                                )}
                            >
                                <div className={twMerge(
                                    'w-full flex items-center py-2 px-3 gap-2',
                                    alignClass,
                                    header.headerContentClassName,
                                    header.enableSort && 'cursor-pointer'
                                )}>
                                    {header.header}
                                    {header.enableSort && <LuArrowUpDown size={14} />}
                                </div>
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default Header