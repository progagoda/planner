import { TCard, TColumn } from "@/entities";

export type TApiBoardContent = TColumn & {
    items: Pick<TCard, 'id'| 'name'>[]
}