import _ from 'lodash';
import { NextResponse } from 'next/server';
import { TColumn } from '@/entities';
import { updateColumn } from '../../graphql';


export async function PATCH(request: Request) {
    const reorderedColumns = await request.json() as Pick<TColumn, 'id' | 'positionIndex'>[]
    const response = await Promise.all(reorderedColumns.map(async column => {
        if (_.isNull(column.id) || _.isUndefined(column?.positionIndex)){
            return NextResponse.json({
                message: 'Null column position index or id'
            }, {status: 400})
        }
        const response = await updateColumn(column, ['id', 'positionIndex'])
        if (response.errors){
            const errors = response.errors.map((error:{message:string}) => error.message)
            return new Response(JSON.stringify(errors), {status: 400})
        }
        return new Response(JSON.stringify(response.data))
    })).catch(e => new Response(e, {status: 400}))

    return new Response(JSON.stringify(response));
}
