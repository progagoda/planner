import { TBoard, TCard, TColumn } from "@/entities";

export type TCardMinInfo =  Pick<TCard, 'id' | 'name' | 'positionIndex' | 'columnId'>

export type TColumnContent = TColumn & {
    items: TCardMinInfo[]
}

export type TApiBoardContent = TBoard & {
    items: TColumnContent[]
}

export type TUpdateColumnPositionIndexArgs = (Pick<TColumn, 'id'> & Partial<Omit<TColumn, 'id'>>)[]

export type TUpdateCardPositionIndexArgs = (Pick<TColumn, 'id'> & Partial<Omit<TCard, 'id'>>)[]