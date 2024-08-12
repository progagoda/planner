'use client'
import { useEffect, useReducer, useState } from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components"
import { Header } from '@/widgets';

export const ShellProvider = ({children}: {children?: React.ReactNode}) => {
    const [theme, setTheme] = useState('')
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
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
    return (
        <DefaultThemeProvider theme={{mode: theme}}>
            <Header switchTheme={switchTheme} isDarkTheme = {theme ==='dark'}/>
            {children}
        </DefaultThemeProvider>)
}