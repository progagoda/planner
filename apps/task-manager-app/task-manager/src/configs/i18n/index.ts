'server-only'
import { type AbstractIntlMessages } from "next-intl";
import {getRequestConfig} from 'next-intl/server';

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(locale: unknown): locale is Locale {
    return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
    const requestLocale = await params.requestLocale;
    const localeParam = typeof requestLocale === 'string' ? requestLocale : 'en';
    let baseLocale;
    try {
        baseLocale = new Intl.Locale(localeParam).baseName;
    } catch {
        baseLocale = 'en' as const ; 
    }
    
    const messageImports = {
        ru: () => import("./locales/ru.json"),
        en: () => import("./locales/en.json"),
    } as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;
  
    const locale  = isValidLocale(baseLocale) ? baseLocale : 'en'
    const messages = (await messageImports[locale]()).default;
    return {
        locale,
        messages,
    }
});
