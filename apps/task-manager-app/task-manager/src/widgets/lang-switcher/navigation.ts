import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import { pathnames, localePrefix} from './config';
import { locales } from '@configs/i18n';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });