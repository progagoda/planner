import { TCard, TColumn } from '@/entities'
export const columns: TColumn[] = [
    {
        id: 1,
        boardId: 2,
        name: 'Test'
    },
    {
        id: 2,
        boardId: 2,
        name: 'Test 2'
    },
    {
        id: 2,
        boardId: 2,
        name: 'Test 3'
    },
]

export const cards: TCard[] = [{
    id: 1,
    columnId:1,
    name: 'Test Card 1',
    description: '123',
    createdDate: '12.10.2024'
},
{
    id: 2,
    columnId:2,
    name: 'Test Card 2',
    description: '321',
    createdDate: '12.10.2024'
},
{
    id: 3,
    columnId:1,
    name: 'Test Card 3',
    description: '321',
    createdDate: '12.10.2024'
},
{
    id: 4,
    columnId:1,
    name: 'Test Card 3',
    description: '321',
    createdDate: '12.10.2024'
},
]