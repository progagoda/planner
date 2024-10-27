import { NextResponse } from 'next/server';
import { TCard } from '@/entities';
import { createCard, getCards} from '../graphql';

export async function POST(request: Request) {
    const body = await request.json() as Pick<TCard, 'name' | 'columnId'>
    const response = await createCard(body, ['id', 'name', 'columnId'])
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const columnId = String(searchParams.get("columnId")); 
    if (!columnId){
        return NextResponse.json({
            message: 'Null column id'
        }, {status: 400})
    }
    const data = await getCards(columnId, ['id','name'])
    return new Response(JSON.stringify(data));
}
