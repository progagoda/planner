import { useTranslations } from "next-intl"
import { useState } from "react"
import { IconButton, Input, Text, antIcons } from "@shared/ui"
import { prepareIconProps } from "@shared/utils"
import { useCreateColumn } from "./api"
import { CreateColumnInputFlex, CreateColumnFlex} from "./styles"
import { TCreateColumnArgs } from "./types"

const {PlusOutlined} = antIcons

type ColumnCreateCardProps = {
    boardId: TCreateColumnArgs['boardId']
}
export const ColumnCreateCard = ({boardId}: ColumnCreateCardProps)=> {
    const t = useTranslations('createColumn');

    const [isEditing, setIsEditing] = useState(false);

    const {createColumn} = useCreateColumn();
    
    const handleCreateColumn = (newTitle: string) => {
        if(newTitle){
            createColumn({name: newTitle, boardId})
        }
        setIsEditing(false);
    }

    return isEditing 
        ? 
        (<CreateColumnInputFlex> 
            <Input 
                autoFocus
                onBlur={()=>setIsEditing(false)} 
                onPressEnter={(e)=>handleCreateColumn((e.target as HTMLInputElement).value)}/>
        </CreateColumnInputFlex>) 
        :
        (<CreateColumnFlex justify="space-between">
            <Text strong onClick = {()=> setIsEditing(true)}>  
                {t('title')}
            </Text>
            <IconButton onClick={()=>setIsEditing(true)}>
                <PlusOutlined style={prepareIconProps('15px')}/>
            </IconButton>
        </CreateColumnFlex>
        )



}