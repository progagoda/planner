import { createColumn } from "../graphql";
import { TCreateColumnArgs } from "../graphql/types";

export async function POST(request: Request) {
    const column = await request.json() as TCreateColumnArgs
    const response  = await createColumn(column, ['id', 'name', 'boardId', 'positionIndex'])
    if (response.errors){
        const errors = response.errors.map((error:{message:string}) => error.message)
        return new Response(JSON.stringify(errors), {status: 400})
    }
    return new Response(JSON.stringify(response.data));
}