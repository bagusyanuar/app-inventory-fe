export interface ITable<T> {
    columns: TColumns<T>[]
    data: T[]
    className?: string
    pageSize?: number[]
    totalRows?: number
    selectedPage?: number
}

export interface IHeader<T> {
    columns: TColumns<T>[]
}

export interface IRows<T> {
    columns: TColumns<T>[]
    data: T[]
}

export interface IPagination {
    pageSize?: number[]
    totalRows?: number
    selectedPage?: number
}

export type TColumns<T> = {
    header?: string;
    cell?: (row: T, index: number) => React.ReactNode;
    align?: TAlign
    width?: string
    headerClassName?: string
    rowClassName?: string
    headerContentClassName?: string
    rowContentClassName?: string
    enableSort?: boolean
}


export type TAlign = "start" | "center" | "end"