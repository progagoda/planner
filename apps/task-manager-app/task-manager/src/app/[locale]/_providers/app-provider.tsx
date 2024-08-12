'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import {AppSessionProvider} from "@entities/session/next-auth-session-provider"
import {API} from '@shared'
import {ComposeChildren} from '@shared/utils'

export const AppProvider = ({children}: {children?: React.ReactNode})=>{ 
    return (
        <ComposeChildren>
            <AppSessionProvider/>
            <QueryClientProvider client={API.queryClient}/>
            {children}
        </ComposeChildren>)
}