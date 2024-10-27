import _ from 'lodash';
import { NextResponse } from 'next/server';
import { deleteBoard, getCards, getColumns, updateBoard } from '../../graphql';
import { TUpdateBoardArgs } from '../../graphql/types';

export async function GET(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    const currentColumns = await getColumns(id, ['id', 'name' , 'boardId'])
    
    const result =  await Promise.all(currentColumns.map( async column => {
        const currentCards =  await getCards(String(column.id), ['id', 'name'])
        return {
            ...column,
            items: currentCards
        }
    }))
    
    return new Response(JSON.stringify(result))
}

export async function DELETE(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    if (!id){
        return NextResponse.json({
            message: 'Null board id'
        }, {status: 400})
    }
    const data = await deleteBoard(Number(id))

    return new Response(data);
}

export async function PATCH(request: Request, route: { params: { id: string } }) {
    const id = Number(route.params.id); 
    const board = await request.json() as TUpdateBoardArgs
    
    if (_.isNull(id) ){
        return NextResponse.json({
            message: 'Null column name or id'
        }, {status: 400})
    }
    
    const response = await updateBoard({id, ...board}, ['id', 'name'])
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}