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
    SidebarFooter
} from '@/ui/components/shadcn/ui/sidebar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/ui/components/shadcn/ui/popover"
import {
    Box,
    FolderArchiveIcon,
    LayoutDashboard,
    BaggageClaim,
    ChevronsUpDown
} from "lucide-react"
import SidebarTree from './SidebarTree'
import SidebarItem from './SidebarItem'

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader
                className='px-0 py-0 h-[4rem] justify-center'
            >
                <div className='px-5 flex items-center justify-between gap-1 w-full'>
                    <div className='flex items-center gap-1'>
                        <img src='./src/assets/logo.png' className='h-8 aspect[1/1]' />
                        <span className='text-sm font-semibold'>Inventory</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className='px-0'>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarItem
                            text='Dashboard'
                            to='/dashboard'
                            icon={<LayoutDashboard />}
                        />
                        <SidebarGroupLabel className='px-4'>Menu</SidebarGroupLabel>
                        <SidebarTree
                            text='Master Data'
                            icon={<FolderArchiveIcon />}
                            isActive={false}
                            children={[
                                {
                                    text: 'Warehouse',
                                    to: '/warehouse'
                                },
                                {
                                    text: 'Unit',
                                    to: '#'
                                },
                                {
                                    text: 'Category',
                                    to: '#'
                                }
                            ]}
                        />
                        <SidebarItem
                            text='Products'
                            to='/product'
                            icon={<Box />}
                        />
                        <SidebarGroupLabel className='px-4'>Inventory</SidebarGroupLabel>
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
            <SidebarFooter className='px-6'>
                <Popover>
                    <PopoverTrigger asChild className='cursor-pointer'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex-1 flex items-center gap-3'>
                                <div className='h-8 w-8 rounded-lg'>
                                    <img src='https://i.pravatar.cc/300' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs font-semibold'>admin@gmail.com</span>
                                    <span className='text-xs'>Administrator</span>
                                </div>
                            </div>
                            <ChevronsUpDown size={14} />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='w-80 border border-neutral-300' side='right' align='end'>
                    </PopoverContent>
                </Popover>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar