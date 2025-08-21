import { Outlet } from 'react-router-dom'
import { Wrapper } from '@/ui/layout/sidebar'
import { Wrapper as NavbarWrapper } from '@/ui/layout/navbar'
import { Wrapper as ContentWrapper } from '@/ui/layout/content'

export default function App() {
    return (
        <section className='w-full h-dvh bg-gray-50'>
            <Wrapper />
            <ContentWrapper>
                <NavbarWrapper>
                    <div className='flex flex-col'>
                        <span className='mb-1 leading-none font-bold text-sm text-neutral-900'>Welcome back, John</span>
                        <span className='text-neutral-500 text-xs leading-none'>Your dashboard detail today</span>
                    </div>
                    <div className='h-8 w-8 rounded-lg border border-brand-500'></div>
                </NavbarWrapper>
                <Outlet />
            </ContentWrapper>
        </section>
    );
}