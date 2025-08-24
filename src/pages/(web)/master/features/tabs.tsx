import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/ui/components/shadcn/ui/tabs'
import {
    Store,
    Tag,
    Archive
} from "lucide-react"

const MasterTabs = () => {
    return (
        <Tabs>
            <TabsList className='bg-brand-50'>
                <TabsTrigger 
                value='warehouse'
                 className='flex items-center gap-1.5 text-brand-500 data-[state=active]:bg-brand-500 data-[state=active]:text-white'>
                    <Store />
                    <span className='text-xs'>Warehouse</span>
                </TabsTrigger>
                <TabsTrigger value='unit' className='flex items-center gap-1.5 text-brand-500 data-[state=active]:bg-brand-500 data-[state=active]:text-white'>
                    <Archive />
                    <span className='text-xs'>Unit</span>
                </TabsTrigger>
                <TabsTrigger value='category' className='flex items-center gap-1.5 text-brand-500 data-[state=active]:bg-brand-500 data-[state=active]:text-white'>
                    <Tag />
                    <span className='text-xs'>Category</span>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default MasterTabs