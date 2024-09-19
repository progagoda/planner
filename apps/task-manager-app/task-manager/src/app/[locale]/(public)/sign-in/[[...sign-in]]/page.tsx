import { SignIn } from '@clerk/nextjs'
import { Flex } from 'antd'

export default function Page() {
    return  (
        <Flex justify='center' align='center' flex={1}>
            <SignIn />
        </Flex>
    )
}