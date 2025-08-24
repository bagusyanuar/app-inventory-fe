import { Outlet } from 'react-router-dom'
import { AppContent } from '@/ui/layout/content'
import { SidebarProvider } from '@/ui/components/shadcn/ui/sidebar';
import { AppSidebar } from '@/ui/layout/sidebar'
import { AppNavbar, NavbarProfile } from '@/ui/layout/navbar'
// import { LuLayoutDashboard, LuBox, LuShoppingBag, LuFolderArchive, LuMenu } from 'react-icons/lu'

export default function App() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full bg-muted'>
                <AppNavbar>
                    <div className='flex flex-col'>
                        <span className='mb-0 font-bold text-sm text-neutral-700'>Welcome back, John</span>
                        <span className='text-neutral-500 text-xs leading-none'>Your dashboard detail today</span>
                    </div>
                    <NavbarProfile />
                </AppNavbar>
                <AppContent>
                    <Outlet />
                </AppContent>
            </main>
        </SidebarProvider>
    );
}