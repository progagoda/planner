import _ from 'lodash';
import { NextResponse } from "next/server";
import { cards } from '../../db';
import { deleteCard } from '../../graphql';

export async function GET(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    const targetCard = _.find(cards,(card)=> card.id === Number(id))
    if (!targetCard){
        return NextResponse.json(
            { message: "This id isn't found "},
            { status: 401 }
        )
    }
    return NextResponse.json(
        targetCard,
        { status: 200 }
    )
}

export async function DELETE(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    if (!id){
        return NextResponse.json({
            message: 'Null card id'
        }, {status: 400})
    }
    const response = await deleteCard(Number(id))
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}