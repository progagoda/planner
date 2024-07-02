import { locales } from '@configs/i18n';
import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import { pathnames, localePrefix} from './config';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
      locales,
      pathnames,
      localePrefix
  });