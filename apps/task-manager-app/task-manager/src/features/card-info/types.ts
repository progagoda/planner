import { TCard } from "@/entities";

export type TApiCardInfo = TCard

export type TApiCardInfoChange = {
    message: string,
    columnId: string,
    newName: string,
}

export type TApiCardInfoChangeArgs = Partial<Omit<TCard, 'id'| 'createdDate'>>

export type TApiCardArchive = TCard

export type TArchiveCardArgs = Pick<TCard, 'id'>