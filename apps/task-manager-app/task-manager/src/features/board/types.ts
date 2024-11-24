import { TBoard, TCard, TColumn } from "@/entities";

export type TCardMinInfo =  Pick<TCard, 'id'| 'name'>

type TColumnContent = TColumn & {
    items: TCardMinInfo[]
}
export type TApiBoardContent = TBoard & {
    items: TColumnContent[]
}