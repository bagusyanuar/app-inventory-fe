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

import { LuSearch } from 'react-icons/lu'
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
import {Button} from '@/ui/components/shadcn/ui/button';

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
        header: "Name",
        cell: ({ row }) => <div className='text-sm'>{row.getValue('name')}</div>
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
                    <PageTitle text='Warehouse' />
                    <PageSubTitle text='Welcome to warehouse page. You can manage all data warehouse on this page.' />
                </div>
                <Breadcrumb>
                    <BreadcrumbList className='text-sm'>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/dashboard">Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Warehouse</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='w-full p-6 bg-white rounded-lg shadow-xl border border-neutral-300'>
                <p className='text text-neutral-700 font-semibold mb-3'>Data Warehouse</p>
                <div className='w-full flex items-center justify-between mb-5'>
                    <div className='flex items-center border border-neutral-300 rounded-md min-w-48'>
                        <div className='mx-2.5 text-neutral-700'>
                            <LuSearch size={14} />
                        </div>
                        <input
                            placeholder='search...'
                            className='flex-1 py-2 focus:ring-0 focus:outline-none text-sm text-neutral-700'
                        />
                    </div>
                    <button className='rounded-md text-sm text-white py-2 px-3.5 bg-brand-500 shadow-md border border-brand-700 cursor-pointer hover:bg-brand-800 hover:border-brand-800 transition-all duration-200 ease-in'>
                        <span>Add Warehouse</span>
                    </button>
                </div>
                
                <div className='overflow-hidden rounded-md border border-neutral-300'>
                    <Table>
                        <TableHeader>
                            {
                                table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
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
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
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
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section >
    )
}