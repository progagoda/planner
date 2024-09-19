import { locales } from '@configs/i18n';
import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT ?? 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;

export const api = process.env.API
    ? `${process.env.API}`
    : `http://localhost:3001/graphql`;

export const defaultLocale = 'en' as const;

export const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/en',
        ru: '/ru'
    }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;