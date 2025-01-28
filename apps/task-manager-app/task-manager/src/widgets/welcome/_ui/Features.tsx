'use client'
import { useTranslations } from "next-intl"
import { Utils } from "@shared"
import { Flex, Typography, antIcons } from "@shared/ui"

const {BookOutlined, CalendarOutlined, ProjectOutlined }  = antIcons
const {prepareIconProps} = Utils

export const Features = () => {
    const t = useTranslations('welcome');
    return (
        <Flex justify="space-between" gap={200}>
            <Flex vertical align="center">
                <BookOutlined style={prepareIconProps()}/>
                <Typography>{t('createNote')}</Typography>
            </Flex>
            <Flex vertical align="center">
                <CalendarOutlined style={prepareIconProps()}/>
                <Typography>{t('createEvent')}</Typography>
            </Flex>
            <Flex vertical align="center">
                <ProjectOutlined style={prepareIconProps()}/>
                <Typography>{t('createTask')}</Typography>
            </Flex>
        </Flex>)
}