"use client"
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Button, Typography } from '@shared/ui';

import { useSession, signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { AuthFeature } from '@/features';

export const UserInfo =  () => {
  const session = useSession();
  const {signOut, isPending: isLoadingSignOut} = AuthFeature.useSignOut()
  const t = useTranslations();

  if( session.status === 'loading'){
    return <Typography>Loading...</Typography>
  }
  if (session.status === "unauthenticated") {
    return <Button onClick={()=> signIn()} key='button'>{t('signIn')}</Button>;
  }
  const handleLogout = () =>{
    signOut();
  }

  const user = session.data?.user;

  return (
    <>
     <Typography key='user'>{user?.name}</Typography>
     <Button disabled={isLoadingSignOut} onClick={handleLogout} key='button'>{t('signOut')}</Button>
    </>
  )
}