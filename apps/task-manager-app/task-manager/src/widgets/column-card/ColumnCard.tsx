import { useTranslations } from "next-intl"
import { useState } from "react"
import { TColumn } from "@/entities"
import { IconButton, Text, antIcons, Popconfirm, Input } from "@shared/ui"
import { prepareIconProps } from "@shared/utils"
import { useChangeColumnName, useDeleteColumn } from "./api"
import { StyledFlex } from "./styles"

const {DeleteOutlined} = antIcons

type TColumnCard = {
    columnCard: TColumn
}
export const ColumnCard = ({ columnCard }: TColumnCard )=> {
    const t = useTranslations('column')

    const [title, setTitle] = useState(columnCard.name)
    const [isEditing, setIsEditing] = useState(false);

    const {changeColumnName} = useChangeColumnName(String(columnCard.id))
    const {deleteColumn} = useDeleteColumn(String(columnCard.id))
    
    const handleChangeName = (newTitle: string) => {
        if(newTitle && newTitle!==title){
            setTitle(newTitle);
            changeColumnName({name: newTitle})
        }
        setIsEditing(false)
    }

    const handleDelete = () => {
        return deleteColumn();
    }

    return (
        <StyledFlex justify="space-between">
            {isEditing ?
                <Input 
                    autoFocus
                    onBlur={()=>setIsEditing(false)} 
                    onPressEnter={(e)=>handleChangeName((e.target as HTMLInputElement).value)}
                    defaultValue={title}/>
                :
                (<><Text strong onClick={()=>setIsEditing(true)}>  
                    {title}
                </Text>
                <Popconfirm
                    title={t('deletePopconfirm.title')}
                    description={t('deletePopconfirm.description')}
                    cancelText={t('deletePopconfirm.cancelText')}
                    okText={t('deletePopconfirm.okText')}
                    onConfirm={handleDelete}
                >
                    <IconButton>
                        <DeleteOutlined style={prepareIconProps('15px')}/>
                    </IconButton>
                </Popconfirm>
                </>
                )}
        </StyledFlex>
    )
}