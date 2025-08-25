export interface IWrapper {
    children?: React.ReactNode;
}

export interface IHeader {
    className?: string
}

export interface ISidebarTree {
    text?: string
    icon?: React.ReactNode
    isActive?: boolean
    children?: ISidebarTreeChild[]
}

export interface ISidebarItem {
    text?: string
    to?: string
    icon?: React.ReactNode
    isActive?: boolean
}

export type ISidebarTreeChild = {
    text?: string
    to?: string
}