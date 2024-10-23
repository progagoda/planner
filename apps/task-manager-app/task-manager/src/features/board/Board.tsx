
'use client'
import _ from 'lodash'
import { Card } from '@/widgets/card'
import { ColumnCard } from '@/widgets/column-card'
import { Scrollable, Flex, Spinner } from '@shared/ui'
import { useGetBoardContent } from './api'
import { StyledFlex, StyledFlexList } from './styles'
import { TApiBoardContent } from './types'

type TBoardProps = {
    id: string
}

export const Board = ({id}: TBoardProps) => {
    const {data: boardContent, isLoading} = useGetBoardContent(Number(id))
    const renderCards = (currentCards: TApiBoardContent['items']) => _.map(currentCards, card=> <Card key={card.id} card={card}/>)

    const renderColumns = () =>  _.map(boardContent, (column) => {
        const maxHeight = 85
        const scrollableHeight = column.items.length > 9 ? maxHeight: undefined 

        return (
            <StyledFlexList vertical>
                <ColumnCard key={column.id} columnCard={column}/>
                <Scrollable height={scrollableHeight}>
                    <Flex vertical gap={10}>
                        {renderCards(column.items)}
                    </Flex>
                </Scrollable>
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

    return (
        <StyledFlex flex={1} gap={10}>
            {renderColumns()}
        </StyledFlex>)
}