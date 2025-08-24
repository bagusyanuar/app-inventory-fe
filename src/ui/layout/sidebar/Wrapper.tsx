import React from 'react'
import type { IWrapper } from './types'

const Wrapper: React.FC<IWrapper> = ({
    children
}) => {
    return (
        <aside className='w-60 h-dvh absolute top-0 left-0 bg-white border-r border-gray-300 flex flex-col'>
            {children}
        </aside>
    )
}

export default Wrapper

{/* <SidebarWrapper>
                <div className='px-5 h-[4rem] flex items-center justify-between gap-1 w-full'>
                    <div className='flex items-center gap-1'>
                        <img src='./src/assets/logo.png' className='h-8 aspect[1/1]' />
                        <span className='text-sm font-semibold'>Inventory</span>
                    </div>
                    <div className='h-6 w-6 flex items-center justify-center rounded bg-white cursor-pointer hover:bg-neutral-100 transition-all ease-in duration-200'>
                        <LuMenu size={14} className='text-neutral-700' />
                    </div>
                </div>
                <div className='flex-1 py-3 px-5 flex flex-col gap-1'>
                    <div className='flex items-center gap-3 bg-brand-50 px-2.5 py-2.5 rounded-lg text-brand-500 cursor-pointer'>
                        <LuLayoutDashboard size={16} strokeWidth={2} className='text-brand-500' />
                        <span className='text-sm font-semibold'>Dashboard</span>
                    </div>
                    <div className='flex items-center gap-3 bg-white px-2.5 py-2.5 rounded-lg text-neutral-500 cursor-pointer hover:bg-brand-50 hover:text-brand-500 transition-all ease-in duration-200'>
                        <LuFolderArchive size={16} strokeWidth={2} />
                        <span className='text-sm font-semibold'>Master</span>
                    </div>
                    <div className='flex items-center gap-3 bg-white px-2.5 py-2.5 rounded-lg text-neutral-500 cursor-pointer'>
                        <LuBox size={16} strokeWidth={2} />
                        <span className='text-sm font-semibold'>Products</span>
                    </div>
                    <div className='flex items-center gap-3 bg-white px-2.5 py-2.5 rounded-lg text-neutral-500 cursor-pointer'>
                        <LuShoppingBag size={16} strokeWidth={2} />
                        <span className='text-sm font-semibold'>Orders</span>
                    </div>
                </div>
            </SidebarWrapper> */}