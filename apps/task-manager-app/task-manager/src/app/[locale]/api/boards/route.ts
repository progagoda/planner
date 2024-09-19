import { TBoard } from "@/widgets/board-switcher/types";
import { api } from "@/widgets/lang-switcher";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const scopeId = searchParams.get("scopeId"); 
    const query = `query {
                        getBoardsByScopeId(scopeId: "${scopeId}") {
                            id
                            scopeId
                            background
                            name
                        }
                   }`;
    const {data} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    }).then(response => response.json())

    return new Response(JSON.stringify(data.getBoardsByScopeId));
}

export async function POST(request: Request) {
    const query = `
    mutation createBoard($board: CreateBoardInput!) {
      createBoard(createBoardInput: $board) {
        id
        scopeId
        background
        name
      }
    }`;
    const {variables} = await request.json() as {variables: TBoard}
    const {data} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { board: variables }
        })
    }).then(response => response.json())

    return new Response(JSON.stringify(data));
}

export async function DELETE(request: Request) {
    const query = `
    mutation deleteBoard($id: Float!) {
        deleteBoard(id: $id)
    }`;
    const {variables} = await request.json() as {variables: Pick<TBoard,'id'>}
    const {data} = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: {
                id: Number(variables.id)
            },
        })
    }).then(response => response.json())

    return new Response(JSON.stringify(data));
}