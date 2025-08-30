import React from 'react'
import type { ISidebarItem } from './types'
import { Link } from "react-router-dom"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/ui/components/shadcn/ui/sidebar'
import {
    Circle
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
                    // className='px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in'
                >
                    <Link to={to}>
                        {icon || <Circle />}
                        <span className='font-semibold'>{text}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default SidebarItem