import _ from 'lodash';
import { NextResponse } from 'next/server';
import { TColumn } from '@/entities';
import { deleteColumn, updateColumn } from '../../graphql';


export async function PATCH(request: Request, route: { params: { id: string } }) {
    const id = Number(route.params.id); 
    const column = await request.json() as Pick<TColumn, 'name' | 'positionIndex'>
    
    if (_.isNull(id) && (!column?.name || !column?.positionIndex)){
        return NextResponse.json({
            message: 'Null column name or id'
        }, {status: 400})
    }
    const response = await updateColumn({id, ...column}, ['id', 'name'])

    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}

export async function DELETE(request: Request, route: { params: { id: string } }) {
    const id = Number(route.params.id); 
    
    if (_.isNull(id) ){
        return NextResponse.json({
            message: 'Null column id'
        }, {status: 400})
    }
    const response = await deleteColumn(id)
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}

