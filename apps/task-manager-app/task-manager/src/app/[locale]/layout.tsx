import { Locale } from '@configs/i18n';
import './global.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { AppProvider } from './_providers/app-provider';


type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout: React.FC<Props>  = async (props)=> {
    const messages = await getMessages();
    return (
        <html lang={props.params.locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <AppProvider>{props.children}</AppProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
export async function generateMetadata({
    params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "root" });

    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
    };
}

export default RootLayout;
