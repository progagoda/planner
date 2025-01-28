import { Flex } from 'antd'
import { BoardSwitcher } from '@/widgets/board-switcher'
import { ScopeSwitcher } from '@/widgets/scope-switcher'

export default function ScopePage() {
    return  (
        <Flex flex={1} gap={10}>
            <ScopeSwitcher />
            <BoardSwitcher/>
        </Flex>
    )
}