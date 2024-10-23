import { NextResponse } from "next/server";
import { TBoard } from "@/widgets/board-switcher/types";
import { createBoard, deleteBoard, getBoardByScopeId } from "../graphql";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const scopeId = searchParams.get("scopeId"); 
    if (!scopeId){
        return NextResponse.json({
            message: 'Null scope id'
        }, {status: 400})
    }
    const data = await getBoardByScopeId(scopeId, ['id', 'name', 'background'])
    return new Response(data);
}

export async function POST(request: Request) {
    const board = await request.json() as Omit<TBoard,'id'>
    const data =  await createBoard(board, ['id', 'scopeId', 'name', 'background'])
    return new Response(data);
}

export async function DELETE(request: Request) {
    const body = await request.json() as Pick<TBoard,'id'>
    if (!body.id){
        return NextResponse.json({
            message: 'Null board id'
        }, {status: 400})
    }
    const data = await deleteBoard(Number(body.id))

    return new Response(data);
}