import { createColumn } from "../graphql";
import { TCreateColumnArgs } from "../graphql/types";

export async function POST(request: Request) {
    const column = await request.json() as TCreateColumnArgs
    const data = await createColumn(column, ['id', 'name', 'boardId'])
    return new Response(data);
}