import { PageTitle, PageSubTitle } from '@/ui/components/typography'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/ui/components/shadcn/ui/breadcrumb"
import { Link } from 'react-router-dom'

import { LuArrowUpDown, LuSquarePlus, LuFilter, LuEllipsisVertical } from 'react-icons/lu'
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/components/shadcn/ui/table"
import {
    DropdownMenu,
    DropdownMenuTrigger,

} from '@/ui/components/shadcn/ui/dropdown-menu'
import { Button } from '@/ui/components/shadcn/ui/button';
import { LucideEllipsisVertical } from 'lucide-react'

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

const columns: ColumnDef<TWarehouse>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <div className='text-sm flex items-center gap-1 cursor-pointer'>
                    <span>Name</span>
                    <LuArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => <div className='text-sm'>{row.getValue('name')}</div>
    },
    {
        id: "actions",
        header: "A",
        size: 10,
        minSize: 10,
        enableResizing: false,

        // cell: ({ row }) => {
        //     return (
        //         <DropdownMenu>
        //             <DropdownMenuTrigger asChild className='flex items-center'>
        //                 <Button variant="ghost" className="">
        //                     <span className="sr-only">Open menu</span>
        //                     <LucideEllipsisVertical />
        //                 </Button>
        //             </DropdownMenuTrigger>
        //         </DropdownMenu>
        //     )
        // }
    }
];


export default function WarehousePage() {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
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
            <div className='overflow-hidden rounded-md border border-neutral-300'>
                <Table className='table-fixed w-full'>
                    <TableHeader>
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}
                                                style={{
                                                    width: `${header.column.getSize()}px`
                                                }}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))
                        }
                    </TableHeader>
                    <TableBody>
                        {/* {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className='text-neutral-700'
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}

                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )} */}
                    </TableBody>
                </Table>
            </div>
        </section >
    )
}