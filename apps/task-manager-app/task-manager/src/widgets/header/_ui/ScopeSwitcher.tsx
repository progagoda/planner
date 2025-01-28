'use client'

import { OrganizationSwitcher, useOrganizationList } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import {useEffect} from 'react'
import { dashboardPageURL } from "@/configs/constants"

export const ScopeSwitcher = () => {
    const params = useParams()
    const {setActive} = useOrganizationList();
    
    useEffect(()=>{
        if(!setActive) return;
        setActive({
            organization: params.organizationId as string
        })
    },[setActive, params.scopeId, params.organizationId])
    
    return (
        <OrganizationSwitcher
            afterSelectOrganizationUrl={`${dashboardPageURL}/some_scope_id`}
            hidePersonal
        />
    )
}