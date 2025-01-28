"use client"
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { Button } from "@shared/ui";
import { signInURL } from "@/configs/constants";

type TSignInButtonProps = {
    size?: 'large' | 'middle' | 'small'
}
export const SignInButton = (props: TSignInButtonProps ) => {
    const router = useRouter()
    const handleSignIn = ()=>router.push(signInURL);
    const t = useTranslations();

    return (
        <Button onClick={handleSignIn} key='button' {...props} >{t('signIn')}</Button>
    )
}