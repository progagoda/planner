'use client'

import {AppSessionProvider} from "@entities/session/next-auth-session-provider"
import {ComposeChildren} from '@shared/utils'
import { QueryClientProvider } from "@tanstack/react-query"
import {API} from '@shared'

export const AppProvider = ({children}: {children?: React.ReactNode})=>(   
    <ComposeChildren>
        <AppSessionProvider/>
        <QueryClientProvider client={API.queryClient}/>
        {children}
    </ComposeChildren>)