
"use client"
import _ from 'lodash'
import { useCallback, useState } from 'react'
import { ColumnCreateCard, ColumnCard, CardCreateCard, BoardInfoDrawer, Card } from '@/widgets'
import { CardFeature } from '@/features'
import { Scrollable, Flex, Spinner, Empty } from '@shared/ui'
import {Header} from './_ui'
import { useGetBoardContent } from './api'
import { StyledFlex, StyledFlexList } from './styles'
import { TApiBoardContent, TCardMinInfo } from './types'

type TBoardProps = {
    id: string
}

export const Board = ({id}: TBoardProps) => {
    const {data: board, isLoading} = useGetBoardContent(Number(id))
    const [showCardInfo, setShowCardInfo] = useState(false);
    const [currentCardId, setCurrentCardId] = useState<number | undefined>()
    const [showBoardInfo, setShowBoardInfo] = useState(false);

    const handleOpenInfo = useCallback((cardId: number) => {
        setCurrentCardId(cardId);
        setShowCardInfo(true);
    }, [])

    const renderCards = (currentCards: TCardMinInfo[]) => _.map(currentCards, 
        card => <Card key={card.id} card={card} handleOpenInfo={handleOpenInfo}/>)

    const renderColumns = (boardInfo: TApiBoardContent) =>  _.map(boardInfo.items, (column) => {
        const maxHeight = 80
        const scrollableHeight = column.items.length > 13 ? maxHeight: undefined 

        return (
            <StyledFlexList vertical gap={10}>
                <ColumnCard key={column.id} columnCard={column}/>
                <Scrollable height={scrollableHeight}>
                    <Flex vertical gap={10}>
                        {renderCards(column.items)}
                    </Flex>
                </Scrollable>
                <CardCreateCard columnId={column.id}/>
            </StyledFlexList>
        )
    })

    if (isLoading) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Spinner/>
            </Flex>
        )
    }
    if (_.isEmpty(board)) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Empty/>
            </Flex>
        )
    }

    return (
        <StyledFlex flex={1} vertical gap={10} background={board.background}>
            <Header board={board} handleShowBoardInfo={()=>setShowBoardInfo(true)}/>
            <Flex flex={1} gap={10} style={{padding: '10px'}}> 
                {renderColumns(board)}
                {currentCardId && 
                <CardFeature.CardInfo 
                    cardId={currentCardId} 
                    visible={showCardInfo} 
                    onCancel={()=>setShowCardInfo(false)}
                />}
                <ColumnCreateCard boardId={board.id}/>
            </Flex>
            <BoardInfoDrawer visible={showBoardInfo} onCancel={()=> setShowBoardInfo(false)} data={board} />
        </StyledFlex>
    )
}