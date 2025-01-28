
"use client"
import { DragDropContext, Draggable, Droppable, DropResult} from '@hello-pangea/dnd';
import _ from 'lodash'
import { useCallback, useState, useEffect } from 'react'
import { ColumnCreateCard, ColumnCard, CardCreateCard, BoardInfoDrawer, Card } from '@/widgets'
import { CardFeature } from '@/features'
import { Flex, Spinner, Empty } from '@shared/ui'
import {Header} from './_ui'
import { useChangeCardPosition, useChangeColumnPosition, useGetBoardContent } from './api'
import { StyledFlex, StyledFlexList } from './styles'
import { TCardMinInfo, TColumnContent } from './types'

type TBoardProps = {
    id: string
}

export const Board = ({id}: TBoardProps) => {
    const {data: board, isLoading } = useGetBoardContent(Number(id))
    const [showCardInfo, setShowCardInfo] = useState(false);
    const [currentCardId, setCurrentCardId] = useState<number | undefined>()
    const [showBoardInfo, setShowBoardInfo] = useState(false);
    const [columns, setColumns] = useState<TColumnContent[]>()

    const {changeColumnPosition} = useChangeColumnPosition()
    const {changeCardPosition} = useChangeCardPosition()

    const handleOpenInfo = useCallback((cardId: number) => {
        setCurrentCardId(cardId);
        setShowCardInfo(true);
    }, [])

    const handleDragEnd = (data: DropResult) => {
        if (!board){
            return;
        }

        const {source, destination, type} = data

        if (!destination){
            return;
        }

        if (destination.droppableId == source.droppableId &&
            destination.index == source.index
        ){
            return;
        }

        if (type == "column"){
            const initOrderColumns = [...board.items]
            const [movedItem] = initOrderColumns.splice(source.index, 1);
            initOrderColumns.splice(destination.index, 0, movedItem);
            _.forEach(initOrderColumns, (column, index) => {
                column.positionIndex = index
            })
            setColumns([...initOrderColumns])
            const reorderedColumns = _.map(initOrderColumns, columns=> ({
                id: columns.id,
                positionIndex: columns.positionIndex
            }))
            changeColumnPosition(reorderedColumns)
        }

        if (type == "card"){
            const initOrderColumns = columns ? [...columns] : []
            const sourceColumn = _.find(initOrderColumns, column=> Number(column.id) === Number(source.droppableId))
            const destColumn = _.find(initOrderColumns, column=> Number(column.id) === Number(destination.droppableId))
            if (!sourceColumn || !destColumn){
                return;
            }

            if (source.droppableId === destination.droppableId){
                const initOrderCards = [...sourceColumn.items]
                const [movedItem] = initOrderCards.splice(source.index, 1);
                initOrderCards.splice(destination.index, 0, movedItem);
                _.forEach(initOrderCards, (card, index) => {
                    card.positionIndex = index
                })
                sourceColumn.items = initOrderCards;
                setColumns([...initOrderColumns])
                changeCardPosition(initOrderCards)
            }
            else {
                const [movedCard] = sourceColumn.items.splice(source.index, 1);
                movedCard.columnId = Number(destination.droppableId);
                destColumn.items.splice(destination.index,0, movedCard)
                _.forEach(sourceColumn.items, (card, index) => {
                    card.positionIndex = index
                })
                _.forEach(destColumn.items, (card, index) => {
                    card.positionIndex = index
                })
                setColumns([...initOrderColumns])
                changeCardPosition(sourceColumn.items)
                changeCardPosition(destColumn.items)
            }
        }
    }

    useEffect(()=> {
        if(board?.items){
            setColumns([...board.items])
        }
    }, [board])

    const renderCards = (currentCards: TCardMinInfo[]) => _.map(currentCards, 
        card => (
            <Draggable key = {`draggable-card-${card.id}--${card.positionIndex}`} draggableId={String(card.id)} index={card.positionIndex}>
                {provided => 
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                        <Card
                            key={card.id+card.positionIndex} 
                            card={card} 
                            handleOpenInfo={handleOpenInfo}/>
                    </div>
                }
            </Draggable>)
    )

    const renderColumns = (currentColumns: TColumnContent[]) => _.map(currentColumns, column => {
        return (
            <Draggable key = {`draggable-column-${column.id}--${column.positionIndex}`} draggableId={String(column.id)} index={column.positionIndex}>
                {provided=> 
                    <div 
                        ref = {provided.innerRef}
                        {...provided.draggableProps}>
                        <StyledFlexList 
                            vertical 
                            gap={10} 
                            {...provided.dragHandleProps}>
                            <ColumnCard key={column.id} columnCard={column}/>
                            <Droppable droppableId={String(column.id)} type='card' direction='vertical'>
                                {(provided,snapshot) =>
                                    <Flex 
                                        vertical 
                                        gap={10}
                                        ref = {provided.innerRef}
                                        style={{
                                            border: snapshot.isDraggingOver ? '1px solid white' : '', // Change color when dragging over
                                            borderRadius: '2px',
                                            transition: 'background-color 0.2s ease', // Smooth transition
                                        }}
                                        {...provided.droppableProps}
                                    >
                                        {renderCards(column.items)}
                                        {provided.placeholder}
                                        <CardCreateCard columnId={column.id}/>
                                    </Flex>}
                            </Droppable>
                        </StyledFlexList>
                    </div>
                }
            </Draggable>
        )})

    if (isLoading) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Spinner/>
            </Flex>
        )
    }

    if (_.isNil(columns) ||_.isEmpty(board)) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Empty/>
            </Flex>
        )
    }

    return (
        <StyledFlex flex={1} vertical gap={10} background={board.background}>
            <Header board={board} handleShowBoardInfo={()=>setShowBoardInfo(true)}/>
            
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='columns' type='column' direction='horizontal'>
                    {provided=>
                        <Flex 
                            flex={1} 
                            gap={10} 
                            key="droppable-columns"
                            style={{padding: '10px'}}
                            ref = {provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {renderColumns(columns)}
                            {provided.placeholder}
                            <ColumnCreateCard boardId={board.id}/>
                        </Flex>}
                </Droppable>
            </DragDropContext>
            {currentCardId && 
                <CardFeature.CardInfo 
                    cardId={currentCardId} 
                    visible={showCardInfo} 
                    onCancel={()=>setShowCardInfo(false)}
                />}
            <BoardInfoDrawer visible={showBoardInfo} onCancel={()=> setShowBoardInfo(false)} data={board} />
        </StyledFlex>
    )
}