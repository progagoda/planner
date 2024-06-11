'server-only'
import {getRequestConfig} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { type AbstractIntlMessages } from "next-intl";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  const localeParam = typeof params.locale === 'string' ? params.locale : 'en';
  const baseLocale = new Intl.Locale(localeParam).baseName;
  
  if (!isValidLocale(baseLocale)) notFound();
  const messageImports = {
    ru: () => import("./locales/ru.json"),
    en: () => import("./locales/en.json"),
  } as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;

  const messages = (await messageImports[baseLocale]()).default;
  return {
    messages,
  }
});
