import _ from 'lodash';
import { NextResponse } from 'next/server';
import { TColumn } from '@/entities';
import { updateColumn } from '../../graphql';


export async function PATCH(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = Number(searchParams.get("id")); 
    const column = await request.json() as Pick<TColumn,'name'>
    
    if (_.isNull(id)|| !column?.name ){
        return NextResponse.json({
            message: 'Null column name or id'
        }, {status: 400})
    }
    const data = updateColumn({id, ...column}, ['id', 'name'])
    return new Response(JSON.stringify(data));
}
