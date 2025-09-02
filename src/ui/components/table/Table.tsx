import { twMerge } from 'tailwind-merge'
import type { ITable } from './types'
import Header from './Header'
import Rows from './Rows'
import Pagination from './Pagination'


const Table = <T,>({
    columns,
    data,
    className,
    pageSize,
    selectedPage,
    totalRows
}: ITable<T>) => {
    return (
        <>
            <div className={twMerge(
                "w-full overflow-x-auto rounded-md border border-neutral-300 mb-2",
                className
            )}>
                <table className="table-fixed min-w-full">
                    <Header columns={columns} />
                    <Rows columns={columns} data={data} />
                </table>

            </div>
            <Pagination
                totalRows={totalRows}
                selectedPage={selectedPage}
                pageSize={pageSize}
            />
        </>
    )
}

export default Table