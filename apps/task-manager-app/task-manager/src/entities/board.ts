export type TCard = {
    id: number,
    columnId: number,
    name: string,
    description?: string,
    createdDate: string,
    positionIndex: number
}

export type TColumn = {
    id: number
    name: string
    boardId: number,
    positionIndex: number;
}

export type TBoard = {
    background: string;
    id: number;
    name: string;
    scopeId: string
  }