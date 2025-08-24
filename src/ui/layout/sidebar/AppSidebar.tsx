import React from 'react'
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from '@/ui/components/shadcn/ui/sidebar'
import {
    ChevronRight,
    Store,
    Box,
    FolderArchiveIcon,
    LayoutDashboard,
    UserCog,
    BaggageClaim,
    NotebookText,
    Blocks,
    Truck,
    Tag,
    Repeat,
    Wallet,
    CircleDollarSign
} from "lucide-react"

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader
                className='px-3 py-0 h-[4rem] justify-center'
            >
                <div className='px-5 flex items-center justify-between gap-1 w-full'>
                    <div className='flex items-center gap-1'>
                        <img src='./src/assets/logo.png' className='h-8 aspect[1/1]' />
                        <span className='text-sm font-semibold'>Inventory</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className='px-3'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    size="lg"
                                    className='px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in'
                                >
                                    <a href="/dashboard">
                                        <LayoutDashboard />
                                        <span className='font-semibold'>Dashboard</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    size="lg"
                                    className='px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in'
                                >
                                    <a href="/master">
                                        <FolderArchiveIcon />
                                        <span className='font-semibold'>Master Data</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    size="lg"
                                    className='px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in'
                                >
                                    <a href="/product">
                                        <Box />
                                        <span className='font-semibold'>Products</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    size="lg"
                                    className='px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in'
                                >
                                    <a href="/movements">
                                        <BaggageClaim />
                                        <span className='font-semibold'>Movements</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar