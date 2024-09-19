'use client'

import { EllipsisOutlined } from "@ant-design/icons"
import { Typography, CardProps, Flex} from "antd"
import { useTranslations } from "next-intl"
import { Popconfirm } from "@shared/ui"
import { useDeleteCardMutation } from "../api"
import { TBoard } from "../types"
import { StyledCard } from "./style"

type TBoardCardProps = {
    board: TBoard
} & CardProps
export const BoardCard = (props: TBoardCardProps) => {
    const t = useTranslations('boardCard')
    const {deleteBoard} = useDeleteCardMutation()
    const handleDelete =  () => {
        deleteBoard({id: props.board.id})
    }
    return (
        <StyledCard $backgroundURL={props.board.background } {...props}>
            <Flex justify="space-between">
                <Typography.Title level={5} style={{ margin: 0 }}>{props.board.name}</Typography.Title>
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