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
                    <span>Navbar</span>
                </NavbarWrapper>
                <Outlet />
            </ContentWrapper>
        </section>
    );
}