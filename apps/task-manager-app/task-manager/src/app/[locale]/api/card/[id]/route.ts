import _ from "lodash";
import { NextResponse } from "next/server";
import { deleteCard, getCard, updateCard } from '../../graphql';
import { TUpdateCardArgs } from "../../graphql/types";

export async function GET(request: Request, route: { params: { id: string } }) {
    const id = route.params.id;
    if (!id){
        return NextResponse.json({
            message: 'Null card id'
        }, {status: 400})
    }
    const response = await getCard(Number(id), ['id', 'name', 'description', 'columnId', 'createdDate'])

    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }

    return new Response(JSON.stringify(response.data));
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
    return new Response(null, {status: response.status});
}

export async function PATCH(request: Request, route: { params: { id: string } }) {
    const id = Number(route.params.id); 
    const card = await request.json() as TUpdateCardArgs
    
    if (_.isNull(id)|| !card?.name ){
        return NextResponse.json({
            message: 'Null column name or id'
        }, {status: 400})
    }
    
    const response = await updateCard({id, ...card}, ['id', 'name'])
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}
