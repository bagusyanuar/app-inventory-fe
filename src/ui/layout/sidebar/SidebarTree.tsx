import React from 'react'
import type { ISidebarTree } from './types'
import { Link } from "react-router-dom"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from '@/ui/components/shadcn/ui/sidebar'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/ui/components/shadcn/ui/collapsible'
import {
    ChevronRight,
    Circle
} from "lucide-react"

const SidebarTree: React.FC<ISidebarTree> = ({
    text = 'menu',
    icon,
    isActive = false,
    children = []
}) => {
    return (
        <SidebarMenu>
            <Collapsible defaultOpen={isActive} className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild
                    >
                        <SidebarMenuButton
                            size="lg"
                            className='px-4 relative group/item'
                            isActive={isActive}
                        >
                            {icon || <Circle />}
                            <span className='font-semibold'>{text}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            <span
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r bg-lime-400 
                            opacity-0 group-hover/item:opacity-100 transition-all duration-200"
                        />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {children.map((child, k) => {
                            return <SidebarMenuSub key={k}>
                                <SidebarMenuSubItem>
                                    <SidebarMenuButton
                                        // className="cursor-pointer text-neutral-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200 ease-in"
                                        size="default"
                                    >
                                        <Link to={child.to || "#"}>
                                            <span className='text-sm'>{child.text}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        })}
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu >
    )
}

export default SidebarTree