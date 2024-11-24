import { FormInstance } from "antd";
import { TBoard } from "@/entities"

export type TBoardInfoFormProps = {
    data: TBoard;
    form: FormInstance<TBoard>
    onSubmit: (data: TBoard) => void
}

export type TChangeBoardInfoArgs = {
    id: TBoard['id'];
    name?: TBoard['name'];
    background?: TBoard['background'];
}

export type TBoardInfoDrawerProps = {
    data: TBoard;
    visible: boolean;
    onCancel: () => void;
}