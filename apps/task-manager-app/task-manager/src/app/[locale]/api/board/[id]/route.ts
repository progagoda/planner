import { getCardsByColumnId, getColumnsByBoardId } from '../../graphql';

export async function GET(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    const currentColumns = await getColumnsByBoardId(id, ['id', 'name' , 'boardId'])
    
    const result =  await Promise.all(currentColumns.map( async column => {
        const currentCards =  await getCardsByColumnId(String(column.id), ['id', 'name'])
        return {
            ...column,
            items: currentCards
        }
    }))
    
    return new Response(JSON.stringify(result))
}
