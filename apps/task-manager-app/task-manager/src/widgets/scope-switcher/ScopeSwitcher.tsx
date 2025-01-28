'use client'
import { Flex } from "antd"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { antIcons, Text } from "@shared/ui"
import { prepareIconProps } from "@shared/utils"
import { ScopeList } from "./_ui/ScopeList"
import { createScopeURL } from "@/configs/constants"

const {PlusOutlined} = antIcons
export const ScopeSwitcher = () => {
    const t = useTranslations('dashboard.scopeSwither');
    const router = useRouter();
    return (
        <Flex vertical
            style={{width:"20%"}}>
            <Flex style={{margin:'1vh'}}justify="space-between">
                <Text strong>{t('title')}</Text>
                <PlusOutlined onClick={()=>router.push(createScopeURL)} style={prepareIconProps('15px')}/>
            </Flex>
            <ScopeList/>
        </Flex>
    )
}