import { Outlet } from 'react-router-dom'
import { Wrapper as SidebarWrapper } from '@/ui/layout/sidebar'
import { Wrapper as NavbarWrapper } from '@/ui/layout/navbar'
import { Wrapper as ContentWrapper } from '@/ui/layout/content'
import { LuLayoutDashboard, LuBox, LuShoppingBag, LuFolderArchive } from 'react-icons/lu'

export default function App() {
    return (
        <section className='w-full h-dvh bg-gray-50'>
            <SidebarWrapper>
                <div className='px-5 h-[4.5rem] flex items-center gap-1'>
                    <img src='./src/assets/logo.png' className='h-8 aspect[1/1]' />
                    <span className='text-sm font-semibold'>Inventory</span>
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
            </SidebarWrapper>
            <ContentWrapper>
                <NavbarWrapper>
                    <div className='flex flex-col'>
                        <span className='mb-1 font-bold text-md text-neutral-900'>Welcome back, John</span>
                        <span className='text-neutral-500 text-xs leading-none'>Your dashboard detail today</span>
                    </div>
                    <div className='h-8 w-8 rounded-lg'>
                        <img src='https://i.pravatar.cc/300' className='rounded-lg border border-brand-500' />
                    </div>
                </NavbarWrapper>
                <Outlet />
            </ContentWrapper>
        </section>
    );
}