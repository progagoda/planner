'use client'

import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Flex, Menu, Skeleton } from "@shared/ui"
import { dashboardPageURL } from "@/configs/constants"

export const ScopeList = () => {
    const {userMemberships, setActive, isLoaded:isLoadedOrgList } = useOrganizationList({
        userMemberships: {infinite:true}
    });
    const {membership, isLoaded: isLoadedCurrentOrg} = useOrganization()
    const router = useRouter()

    const items =  userMemberships?.data?.map(scope => ({
        key: scope.organization.id,
        icon: <Image  width={20} height={20} src={scope.organization.imageUrl} alt='Scope image'/>,
        label: scope.organization.name,
    })) ?? []

    const handleChangeScope = (scopeId: string)=> {
        setActive?.({
            organization: scopeId
        })
        router.push(`${dashboardPageURL}/${scopeId}`)
    }

    if(!isLoadedOrgList || !isLoadedCurrentOrg) {
        return (<Flex vertical gap={10}>
            <Skeleton.Input active={true} size= 'default' />
            <Skeleton.Input active={true} size= 'default' />
            <Skeleton.Input active={true} size= 'default' />
        </Flex>)
    }
    
    return (
        <Menu
            style={{ height:"100%"}}
            onSelect={(info)=>handleChangeScope(info.key)}
            selectedKeys={[membership?.organization.id ?? '']}
            items ={[...items]}
        />
    )
}