import { useState } from "react"
import { TColumn } from "@/entities"
import { IconButton, Text,antIcons } from "@shared/ui"
import { prepareIconProps } from "@shared/utils"
import { useChangeColumnName } from "./api"
import { StyledFlex } from "./styles"

const {DeleteOutlined} = antIcons

type TColumnCard = {
    columnCard: TColumn
}
export const ColumnCard = ({ columnCard }: TColumnCard )=> {
    const [title, setTitle] = useState(columnCard.name)

    const {changeColumnName} = useChangeColumnName(String(columnCard.id))
    
    const handleChangeName = (newTitle: string) => {
        if(newTitle){
            setTitle(newTitle);
            changeColumnName({name: newTitle})
        }
    }
    return (
        <StyledFlex justify="space-between">
            <Text strong editable={
                {
                    icon: null,
                    onChange: handleChangeName,
                    triggerType: ['text'],
                }
            }>  
                {title}
            </Text>
            <IconButton>
                <DeleteOutlined style={prepareIconProps('15px')}/>
            </IconButton>
        </StyledFlex>

    )
}