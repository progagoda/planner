'use client'
import { useTranslations } from 'next-intl';
import { Title, Flex, Typography } from "@shared/ui"


export const AboutApp = () => {
    const t = useTranslations('welcome');
    return (
        <Flex vertical>
            <Title>
                {t('aboutAppTitle')}
            </Title>
            <Flex justify='center'>
                <Typography>{t('aboutAppDescription')}</Typography>
            </Flex>
        </Flex>
    )
}