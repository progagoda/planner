"use client"
import { signIn } from "next-auth/react"
import { useTranslations } from 'next-intl';
import { Button } from "@shared/ui";

export const SignInButton = () => {
    const handleSignOut = ()=>signIn();
    const t = useTranslations();

    return (
        <Button onClick={handleSignOut} key='button'>{t('signIn')}</Button>
    )
}