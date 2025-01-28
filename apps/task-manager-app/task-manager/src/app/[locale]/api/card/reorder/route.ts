import _ from 'lodash';
import { NextResponse } from 'next/server';
import { TCard } from '@/entities';
import { updateCard } from '../../graphql';


export async function PATCH(request: Request) {
    const reorderedCards = await request.json() as Pick<TCard, 'id' | 'positionIndex'|'columnId'>[]
    const response = await Promise.all(reorderedCards.map(async card => {
        if (_.isNull(card.id) || (_.isUndefined(card.positionIndex) && _.isUndefined(card.columnId))){
            return NextResponse.json({
                message: 'Null column position index, column id or card id'
            }, {status: 400})
        }
        const response = await updateCard(card, ['id','columnId', 'positionIndex'])
        if (response.errors){
            const errors = response.errors.map((error:{message:string}) => error.message)
            return new Response(JSON.stringify(errors), {status: 400})
        }
        return new Response(JSON.stringify(response.data))
    })).catch(e => new Response(e, {status: 400}))

    return new Response(JSON.stringify(response));
}
