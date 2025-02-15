'use client'

import { useTranslations } from "next-intl"
import { FormInput, FormItem} from "@shared/ui"

export const CreateBoardForm = () => {
    const t = useTranslations('board.createBoard.form')

    return (
        <>
            <FormItem name='name' label={t('labels.name')} required> 
                <FormInput placeholder={t('placeholders.name')}/>
            </FormItem>
            <FormItem name='background' label={t('labels.backgroundLink')} required>
                <FormInput placeholder={t('placeholders.backgroundLink')}/>
            </FormItem>
        </>
    )
}