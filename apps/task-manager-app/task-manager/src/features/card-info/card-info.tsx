'use client'
import _ from "lodash";
import { useTranslations } from "next-intl";
import { InfoModal, Flex, Spinner, Empty, SecondaryText, Button } from "@shared/ui";
import { Description, CardTitle } from "./_ui";
import { useArchiveCard, useChangeCardInfo, useGetCardInfo } from "./api";

type TCardInfo = {
    cardId: number;
    visible: boolean;
    onCancel: typeof _.noop
}
export const CardInfo = ({cardId, visible, onCancel}: TCardInfo) => {
    const t = useTranslations('card')

    const {data: card, isLoading} = useGetCardInfo(cardId)
    const {archiveCard} = useArchiveCard();
    const {changeCardInfo} = useChangeCardInfo(cardId);

    const handleAchiveCard = () => {
        archiveCard({id: cardId})
        onCancel();
    }

    if(isLoading) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Spinner/>
            </Flex>
        )
    }

    if(!card) {
        return (
            <Flex flex={1} justify='center' align='center'>
                <Empty/>
            </Flex>
        )
    }

    return (
        <InfoModal
            footer={null} 
            onCancel={onCancel}
            open={visible}> 
            <CardTitle data={card.name} onAction={changeCardInfo}/>
            <SecondaryText>{t('created', { date: new Date(Number(card.createdDate)).toLocaleString()})}</SecondaryText>
            <Flex flex={1} gap={20}>
                <Flex vertical flex={1}>
                    <Description data={card.description} onAction={changeCardInfo}/>
                </Flex>
                <Flex vertical gap={10} align="center" justify="center">
                    <Button onClick={handleAchiveCard}>{t('buttons.archive')}</Button> 
                </Flex> 
            </Flex>  
        </InfoModal>
    )
}