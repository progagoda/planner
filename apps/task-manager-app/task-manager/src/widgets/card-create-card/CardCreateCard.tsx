import { useTranslations } from "next-intl"
import { useState } from "react"
import { TColumn } from "@/entities"
import { IconButton, Input, Text, antIcons } from "@shared/ui"
import { prepareIconProps } from "@shared/utils"
import { useCreateCard } from "./api"
import { CreateCardInputFlex, CreateCardFlex} from "./styles"

const {PlusOutlined} = antIcons

type CardCreateCardProps = {
    columnId: TColumn['id']
}
export const CardCreateCard = ({columnId}: CardCreateCardProps)=> {
    const t = useTranslations('createCard');

    const [isEditing, setIsEditing] = useState(false);

    const {createCard} = useCreateCard();
    
    const handleCreateColumn = (newTitle: string) => {
        if(newTitle){
            createCard({name: newTitle, columnId})
        }
        setIsEditing(false);
    }

    return isEditing 
        ? 
        (<CreateCardInputFlex> 
            <Input 
                autoFocus
                onBlur={()=>setIsEditing(false)} 
                onPressEnter={(e)=>handleCreateColumn((e.target as HTMLInputElement).value)}/>
        </CreateCardInputFlex>) 
        :
        (<CreateCardFlex justify="space-between">
            <Text strong onClick = {()=> setIsEditing(true)}>  
                {t('title')}
            </Text>
            <IconButton onClick={()=>setIsEditing(true)}>
                <PlusOutlined style={prepareIconProps('15px')}/>
            </IconButton>
        </CreateCardFlex>
        )



}