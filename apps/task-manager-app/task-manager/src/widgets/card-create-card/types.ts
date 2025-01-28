import { TCard } from "@/entities";

export type TApiCardCreate = TCard

export type TCreateCardArgs = Pick<TCard, 'columnId' | 'name'>