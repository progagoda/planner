import { useTranslations } from "next-intl"
import { useEffect } from "react"
import { Form, Input } from "@shared/ui"
import { TBoardInfoFormProps } from "./types"


export const BoardInfoForm = ({data, form, onSubmit}: TBoardInfoFormProps) => {
    const t = useTranslations('board.boardInfo');
    
    useEffect(()=>{
        if (data){
            form.setFieldsValue(data)
        }
    })

    return (
        <Form form={form} onFinish={onSubmit}>
            <Form.Item name='name' label={t('labels.name')}>
                <Input/>
            </Form.Item>
            <Form.Item name='background' label={t('labels.background')}>
                <Input/>
            </Form.Item>
        </Form>
    )
}