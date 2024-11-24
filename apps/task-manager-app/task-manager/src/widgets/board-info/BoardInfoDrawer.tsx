import { useTranslations } from "next-intl";
import { Drawer, Form, Button, Flex } from "@shared/ui"
import { useChangeBoardInfo } from "./api";
import { BoardInfoForm } from "./BoardInfoForm";
import { TChangeBoardInfoArgs, TBoardInfoDrawerProps } from "./types";
export const BoardInfoDrawer = ({visible, onCancel, data}: TBoardInfoDrawerProps) => {
    const t = useTranslations('board.boardInfo')
    const [form] = Form.useForm();
    const {changeBoardInfo} = useChangeBoardInfo();
    
    const handleSubmit = (formData: TChangeBoardInfoArgs) => {
        console.log(formData)
        changeBoardInfo({ ...formData, id: data.id})
        onCancel();
    }

    const renderFooter = () => (
        <Flex justify='flex-end'>
            <Button onClick={()=>form.submit()}>{t('buttons.submit')}</Button>
        </Flex>
    )

    return (
        <Drawer 
            title={t('changeInfoTitle')}
            open={visible} 
            onClose={onCancel} 
            footer={renderFooter()} 
            width={800}>
            <BoardInfoForm form = {form} data={data} onSubmit={handleSubmit}/>
        </Drawer>
    )
}