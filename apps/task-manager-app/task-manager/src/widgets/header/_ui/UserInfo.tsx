'use client'
import { useAuth, UserButton } from '@clerk/nextjs';
import { AuthFeature } from '@/features';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import { usePathname } from 'next/navigation';
import { signInURL, signUpURL } from '@/configs/constants';

export const UserInfo =  () => {
    const {sessionId, isLoaded} = useAuth()
    const currentPath = usePathname()
    const {SignInButton} = AuthFeature;
  
    if (!isLoaded) {
        return <SkeletonAvatar/>

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