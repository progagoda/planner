import { useState } from "react";
import {Input, Title} from "@shared/ui";
import { TApiCardInfoChangeArgs } from "../types"
type TCardTitleProps = {
    data?: string
    onAction: (data: TApiCardInfoChangeArgs)=> void
}

export const CardTitle = ({data, onAction}: TCardTitleProps) => {
    const [title, setTitle] = useState(data)

    const handleChangeTitle = (newTitle: string) => {
        setTitle(newTitle);
        if(data){
            if(newTitle!=data) {
                onAction({name: newTitle})
            }
            return;
        }
        onAction({name: newTitle})
    }

    return  (
        <Title 
            level={4} 
            editable={
                {
                    icon: null,
                    onChange: handleChangeTitle,
                    triggerType: ['text'],
                }}>
            {title}
        </Title>
    )
}