'use client'
import {ruRU, enUS} from '@clerk/localizations'
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import { useLocale } from 'next-intl';
import { useEffect, useReducer, useState } from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components"
import { Header } from '@/widgets';
import { Layout } from "@shared/ui";
import { welcomePageURL } from "@/configs/constants";
import { Locale } from "@/configs/i18n";

export const ShellProvider = ({children}: {children?: React.ReactNode}) => {
    const [theme, setTheme] = useState('')
    const locale = useLocale() as Locale;
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [isLoading, setIsLoading] = useState(true);
    const switchTheme = ()=> {
        if(theme=='light'){
            setTheme('dark')
            sessionStorage?.setItem('theme','dark')
        }
        else {
            setTheme('light')
            sessionStorage?.setItem('theme','light')
        }
        forceUpdate();
    }

    useEffect(() => {
        if (window) { 
            const theme = sessionStorage.getItem('theme');
            setTheme(theme ?? 'dark') ;
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const clerkTheme = theme === 'dark' ? dark : undefined
    const clerkLanguage = locale === 'ru' ? ruRU : enUS

    return (
        <DefaultThemeProvider theme={{mode: theme}}>
            <ClerkProvider
                appearance={{
                    baseTheme: clerkTheme,
                }}
                localization={clerkLanguage}
                afterSignOutUrl = {welcomePageURL}
            >
                <Header switchTheme={switchTheme} isDarkTheme = {theme ==='dark'}/>
                <Layout style={{height:'93vh'}}>
                    {children}
                </Layout>
            </ClerkProvider>
        </DefaultThemeProvider>)
}