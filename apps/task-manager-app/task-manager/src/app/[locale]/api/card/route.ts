import { TCard } from '@/entities';
import { createCard } from '../graphql';

export async function POST(request: Request) {
    const body = await request.json() as Pick<TCard, 'name' | 'columnId'>
    const response = await createCard(body, ['id', 'name', 'columnId'])
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}
