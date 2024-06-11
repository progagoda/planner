'use client'
import { Locale } from '@configs/i18n';
import { Button } from '@shared/ui';
import { useLocale } from 'next-intl';
import { useParams} from 'next/navigation';
import { useTransition } from 'react';
import { usePathname, useRouter } from './navigation';
/* eslint-disable-next-line */
export interface LangSwitcherProps {}

export function LangSwitcher(props: LangSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const [_, startTransition] = useTransition();
  const handleLangSwitch = ()=> {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    //@ts-expect-error 
    startTransition(()=>router.replace({pathname, params}, {locale: newLocale}));
  }

  return (
  <Button data-testid= 'lang-switcher' onClick={handleLangSwitch}>{locale}</Button>
);
}

export default LangSwitcher;
