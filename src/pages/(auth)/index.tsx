import { FormLogin } from '@/features/login/components';
import { FullPageLoader } from '@/ui/components/loader'
export default function LoginPage() {
    return (
        <div className="w-full h-dvh flex items-center justify-center bg-brand-100">
            <FormLogin />
            <FullPageLoader show={true} />
        </div>
    );
}