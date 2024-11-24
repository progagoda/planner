'use client'

import { EllipsisOutlined } from "@ant-design/icons"
import { CardProps} from "antd"
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from "next-intl"
import { TBoard } from "@/entities"
import { Popconfirm,Title, Flex} from "@shared/ui"
import { useDeleteCardMutation } from "../api"
import { StyledCard } from "./style"

type TBoardCardProps = {
    board: TBoard
} & CardProps
export const BoardCard = (props: TBoardCardProps) => {
    const t = useTranslations('board.boardCard')

    const router = useRouter()

    const {deleteBoard} = useDeleteCardMutation()

    const currentPath = usePathname();

    const handleDelete =  () => {
        deleteBoard({id: props.board.id})
    }
    const handleClick = () => {
        router.push(`${currentPath}/board/${props.board.id}`)
    }

    return (
        <StyledCard backgroundURL={props.board.background } {...props}>
            <Flex justify="space-between">
                <Title level={5} style={{ margin: 0 }} onClick={handleClick}>{props.board.name}</Title>
                <Popconfirm
                    title={t('deletePopconfirm.title')}
                    description={t('deletePopconfirm.description')}
                    cancelText={t('deletePopconfirm.cancelText')}
                    okText={t('deletePopconfirm.okText')}
                    onConfirm={handleDelete}
                >
                    <EllipsisOutlined color="white" size={100} />
                </Popconfirm>
            </Flex>
        </StyledCard>
    )
}