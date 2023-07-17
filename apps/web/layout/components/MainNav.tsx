import React from 'react';
import Link from 'next/link';
import { AuthModal } from '../AuthModal';
import { useAuth, useToggle } from '@app/hooks';
import { Button } from '@app/ui/components/button';
import { useRouter } from 'next/router';
import { UserNav } from './UserNav';
export const MainNav = () => {
    const [isOpen, triggerModal] = useToggle(false);

    const router = useRouter();
    const { user, logOut } = useAuth();

    const login = () => {
        triggerModal.on();
    };

    return (
        <div className="flex justify-between items-center p-4 w-full">
            <div className="flex items-center justify-between w-full">
                <h2 className="text-3xl font-semibold">FossFolio</h2>
                <AuthModal isOpen={isOpen} onClose={triggerModal.off} />
                <div className="md:flex gap-4 hidden">
                    <Link href="/">
                        <h4 className="text-md text-[#667085]" onClick={() => router.push('/')}>
                            Home
                        </h4>
                    </Link>
                    <Link href="/events">
                        <h4 className="text-md text-[#667085]">Events</h4>
                    </Link>
                    <Link href="/dashboard">
                        <h4 className="text-md text-[#667085]">Dashboard</h4>
                    </Link>
                </div>
                {user ? (
                    <UserNav />
                ) : (
                    <Button
                        variant="ghost"
                        className="px-8 text-md text-white hover:text-[#7F56D9] hover:bg-[#F9F5FF] bg-[#7F56D9] hover"
                        onClick={login}
                    >
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
};
