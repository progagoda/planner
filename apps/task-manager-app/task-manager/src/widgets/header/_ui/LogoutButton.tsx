"use client"
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useTranslations } from 'next-intl';
import { AuthFeature } from '@/features';
import {Button } from '@shared/ui';

export const LogoutButton =  () => {
    const {signOut, isPending: isLoadingSignOut} = AuthFeature.useSignOut()
    const t = useTranslations();
  

    const handleLogout = () =>{
        signOut();
    }


    return (
        <Button disabled={isLoadingSignOut} onClick={handleLogout} key='button'>{t('signOut')}</Button>
    )
}