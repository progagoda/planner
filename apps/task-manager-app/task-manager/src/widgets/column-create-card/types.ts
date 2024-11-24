import { TColumn } from "@/entities";

export type TApiColumnCreate = TColumn
export type TCreateColumnArgs = Omit<TColumn, 'id'>