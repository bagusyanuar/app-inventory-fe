import React from 'react'
import type { ISidebarItem } from './types'
import { Link } from "react-router-dom"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/ui/components/shadcn/ui/sidebar'
import {
    Circle,
} from "lucide-react"
const SidebarItem: React.FC<ISidebarItem> = ({
    icon,
    isActive = false,
    text = 'menu',
    to = '#'
}) => {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    isActive={isActive}
                    asChild
                    size="lg"
                    className='relative px-4'
                >
                    <Link to={to} className='relative group/item'>
                        {icon || <Circle />}
                        <span className='font-semibold'>{text}</span>
                        <span
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-lime-400 
                            opacity-0 group-hover/item:opacity-100 transition-all duration-200"
                        />
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default SidebarItem