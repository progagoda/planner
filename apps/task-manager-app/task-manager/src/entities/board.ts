export type TCard = {
    id: number,
    columnId: number,
    name: string,
    description?: string,
    createdDate: string,
}

export type TColumn = {
    id: number
    name: string
    boardId: number,
}

export type TBoard = {
    background: string;
    id: number;
    name: string;
    scopeId: string
  }