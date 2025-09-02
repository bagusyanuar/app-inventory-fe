import { LuSquarePlus, LuFilter, LuEllipsisVertical } from 'react-icons/lu'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent

} from '@/ui/components/shadcn/ui/dropdown-menu'
import { Table } from '@/ui/components/table'
import type { TColumns } from '@/ui/components/table/types'

type TWarehouse = {
    id: string;
    name: string;
}

const data: TWarehouse[] = [
    {
        id: 'm5gr84i9',
        name: 'Warehouse 1'
    },
    {
        id: '3u1reuv4',
        name: 'Warehouse 2'
    },
]

const columns: TColumns<TWarehouse>[] = [
    {
        header: "Warehouse Name",
        cell: (row) => row.name,
        width: "min-w-72",
        align: 'start',
        enableSort: false
    },
    {
        header: "",
        width: "w-[5rem]",
        align: 'center',
        cell: () => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='h-6 w-6 flex items-center justify-center rounded-md cursor-pointer hover:bg-muted transition-colors ease-in duration-200'>
                            <LuEllipsisVertical size={12} />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <div className='w-32 h-16'></div>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
];


export default function WarehousePage() {
    return (
        <section>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <p className='text-lg font-semibold text-neutral-900'>Warehouse</p>
                    <p className='text-xs text-neutral-500'>You can manage all data warehouse on this page.</p>
                </div>

            </div>
            <div className='w-full flex items-center justify-between mb-3'>
                {/* <div className='flex items-center border border-neutral-300 rounded-md min-w-48'>
                    <div className='mx-2.5 text-neutral-700'>
                        <LuSearch size={14} />
                    </div>
                    <input
                        placeholder='search...'
                        className='flex-1 py-2 focus:ring-0 focus:outline-none text-sm text-neutral-700'
                    />
                </div> */}
                <button className='flex items-center gap-2 rounded-md text-xs text-white py-2.5 px-5 bg-brand-500 shadow-md border border-brand-700 cursor-pointer hover:bg-brand-800 hover:border-brand-800 transition-all duration-200 ease-in'>
                    <LuSquarePlus size={14} />
                    <span>New Warehouse</span>
                </button>
                <button className='flex items-center gap-2 rounded-md text-xs text-brand-500 py-2.5 px-5 bg-white500 border border-neutral-300 cursor-pointer hover:bg-brand-800 hover:border-brand-800 transition-all duration-200 ease-in'>
                    <LuFilter size={14} />
                    <span>Filters</span>
                </button>
            </div>
            <Table
                columns={columns}
                data={data}
                totalRows={100}
                selectedPage={1}
            />
        </section >
    )
}