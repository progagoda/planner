'use client'
import { useState } from 'react';
import { AuthFeature } from '@/features';
import { useAppSession } from '@/entities/session/use-app-session';
import {Skeleton, Avatar, Dropdown, MenuProps } from '@shared/ui';
import { LogoutButton } from './LogoutButton';

export const UserInfo =  () => {
    const session = useAppSession();
    const {SignInButton} = AuthFeature;
    const [open, setOpen] = useState(false);
  
    if (session.status === "loading") {
        return <Skeleton/>
    }

    if (session.status === "unauthenticated") {
        return <SignInButton />;
    }

    const items: MenuProps['items'] = [
        {
            label: <LogoutButton/>,
            key: 'logout',
        },
    ]

    return (
        <Dropdown menu={{items}} onOpenChange={()=>setOpen(!open)}>
            <Avatar size="large" src={session.data?.user?.image}/>
        </Dropdown>
    )
}