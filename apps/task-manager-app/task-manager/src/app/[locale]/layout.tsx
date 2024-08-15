import { Locale } from '@configs/i18n';
import './global.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { AppProvider } from './_providers/app-provider';
import { ShellProvider } from './_providers/shell-provider';
import StyledComponentsRegistry from './_providers/style-provider';


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
                    <StyledComponentsRegistry>
                        <AppProvider>
                            <ShellProvider>
                                {props.children}
                            </ShellProvider>
                        </AppProvider>
                    </StyledComponentsRegistry>
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
        // icons: [
        //     {
        //         url: 'https://cdn-icons-png.flaticon.com/512/3234/3234972.png',
        //         href: 'https://cdn-icons-png.flaticon.com/512/3234/3234972.png',
        //     }
        // ]
    };
}

export default RootLayout;
