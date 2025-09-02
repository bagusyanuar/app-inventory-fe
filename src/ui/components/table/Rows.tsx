import type { IRows } from './types'
import { twMerge } from 'tailwind-merge'

const Rows = <T,>({
    columns,
    data
}: IRows<T>) => {
    return (
        <tbody>
            {
                data.map((data, kRow) => {
                    return (
                        <tr
                            key={kRow}
                            className='border-b border-neutral-300 last:border-b-0'
                        >
                            {
                                columns.map((column, kColumn) => {
                                    let alignClass = 'justify-start';
                                    switch (column.align) {
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
                                        <td
                                            key={kColumn}
                                            className={twMerge(
                                                'text-sm text-neutral-700',
                                                column.rowClassName,
                                                column.width
                                            )}
                                        >
                                            <div
                                                className={twMerge(
                                                    'w-full flex items-center py-2 px-3',
                                                    alignClass,
                                                    column.rowContentClassName
                                                )}
                                            >
                                                {column.cell ? column.cell(data, kRow) : <></>}
                                            </div>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default Rows