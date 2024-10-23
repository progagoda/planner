import { locales } from '@configs/i18n';
import {Pathnames} from 'next-intl/navigation';

export const defaultLocale = 'en';

export const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/en',
        ru: '/ru'
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;