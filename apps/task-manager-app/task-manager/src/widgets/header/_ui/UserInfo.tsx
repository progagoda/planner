'use client'
import { useAuth, UserButton } from '@clerk/nextjs';
import { Skeleton } from 'antd';
import { usePathname } from 'next/navigation';
import { AuthFeature } from '@/features';
import { signInURL, signUpURL } from '@/configs/constants';

export const UserInfo =  () => {
    const {sessionId, isLoaded} = useAuth()
    const currentPath = usePathname()
    const {SignInButton} = AuthFeature;
  
    if (!isLoaded) {
        return <Skeleton.Avatar/>

    }
    if (currentPath===signInURL || currentPath===signUpURL){
        return;
    }
    if (!sessionId) {
        return <SignInButton />;
    }
    return (
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Action label="manageAccount" />
                <UserButton.Action label="signOut" />
            </UserButton.MenuItems>
        </UserButton>
    )
}