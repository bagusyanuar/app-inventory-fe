import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/shadcn/ui/dropdown-menu"
import {
    User,
    Power
} from "lucide-react"

const NavbarProfile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1.5 cursor-pointer outline-none focus:outline-none'>
                <div className='h-8 w-8 rounded-lg'>
                    <img src='https://i.pravatar.cc/300' className='rounded-lg' />
                </div>
                <span className='text-xs text-neutral-700 font-semibold'>John</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
                <DropdownMenuItem className='text-neutral-700'>
                    <User />
                    <span className='text-xs'>My Account</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='text-neutral-700'>
                    <Power />
                    <span className='text-xs'>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavbarProfile