import { useTranslations } from "next-intl"
import { Flex, Input, Title } from "@shared/ui"
import { TApiCardInfoChangeArgs } from '../types'
import { StyledFlex } from "./styles"

type TDescriptionProps = {
    data?: string
    onAction: (data: TApiCardInfoChangeArgs) => void
}
export const Description = ({data, onAction}: TDescriptionProps) => {
    const t = useTranslations('card.description')
    
    const handleChangeDescription = (newText: string) => {
        if(data){
            if(newText!=data) {
                onAction({description: newText})
            }
            return;
        }
        onAction({description: newText})
    }
    
    return <Flex vertical>
        <Title level={5}>{t('title')}</Title>
        <StyledFlex>
            <Input.TextArea autoSize defaultValue={data} onBlur={(e) => handleChangeDescription(e.currentTarget.value)}/>
        </StyledFlex>
    </Flex>
}