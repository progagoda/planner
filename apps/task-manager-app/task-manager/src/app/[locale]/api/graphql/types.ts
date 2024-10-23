import { TBoard } from "@/widgets/board-switcher";
import { TCard, TColumn } from "@/entities";

export type TCreateArgs<T> = Omit<T, 'id'>

export type TCreateBoardArgs = TCreateArgs<TBoard>
export type TBoardResultFields = (keyof TBoard)[];

export type TCreateColumnArgs = TCreateArgs<TColumn>
export type TColumnResultFields = (keyof TColumn)[];

export type TCardResultFields = (keyof TCard)[];
export type TCreateCardArgs = TCreateArgs<Omit<TCard, 'createdDate'| 'description'>>