'use client'
import { Empty, Flex, List, Form } from "antd"
import _ from "lodash"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { Modal, Spinner, Typography, Button } from "@shared/ui"
import { BoardCard } from "./_ui/BoardCard"
import { CreateBoardForm } from "./_ui/CreateBoardForm"
import { useCreateBoardMutation, useGetBoard } from "./api"
import { TBoard } from "./types"

export const BoardSwitcher = () => {
    const t = useTranslations('dashboard.boardSwitcher')
    const createBoardT = useTranslations('createBoard')

    const {data: cardArrMock, isLoading} = useGetBoard();
    const {createBoard, isLoading: isLoadingCreateBoard} = useCreateBoardMutation();

    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [form] = Form.useForm<Omit<TBoard, 'id'| 'scopeId'>>()

    const handleCreateBoardFinish = (form: Omit<TBoard, 'id'| 'scopeId'> ) => {
        createBoard && createBoard(form)
        setIsOpenCreateModal(false);
    }

    const renderCreateButton = () => (
        <Flex>
            <Button key='create-board' onClick={()=>setIsOpenCreateModal(true)}>{createBoardT('title')}</Button>
        </Flex>
    )

    if (isLoading || isLoadingCreateBoard) {
        return (
            <Flex flex={1} justify="center" align="center">
                <Spinner/>
            </Flex>
        )
    }

    const renderContent = () => {
        if (_.isEmpty(cardArrMock)) {
            return (
                <Flex flex={1} justify="center" align="center" vertical>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 100 }}
                        description={
                            <Typography>
                                {t('emptyList')}
                            </Typography>
                        }
                    />
                </Flex>
            )
        }
        return (
            <List
                grid={{ gutter: 0, column: 2 }}
                dataSource={cardArrMock}
                renderItem={(item) => (
                    <List.Item>
                        <BoardCard key={item.id} board={item}/>
                    </List.Item>
                )}/>
        )
    }

    return (
        <Flex flex={1} style={{margin: '1vh'}} gap={10} vertical>
            {renderCreateButton()}
            {renderContent()}
            <Modal
                open={isOpenCreateModal}
                closable
                onCancel={()=>setIsOpenCreateModal(false)}
                onOk={()=>form.submit()}
                okText= {createBoardT('buttons.confirm')}
                cancelText={createBoardT('buttons.cancel')}>
                <Form form={form} layout="vertical"
                    onFinish={handleCreateBoardFinish}>
                    <CreateBoardForm/>
                </Form>
            </Modal>
        </Flex>
    )
}