import { CreateOrganization } from '@clerk/nextjs'
import { Flex } from 'antd'
import { dashboardPageURL } from '@/configs/constants'

export default function ScopePage() {
    return  (
        <Flex flex={1} justify='center' align='center' style={{height:'100%'}}>
            <CreateOrganization
                afterCreateOrganizationUrl={dashboardPageURL}
            />
        </Flex>
    )
}