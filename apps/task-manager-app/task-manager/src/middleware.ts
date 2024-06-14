import { type Locale, locales } from "./configs/i18n";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: "en" satisfies Locale,
    localePrefix: "never",
});
//@eslint-disable-next-line
export default function (req: NextRequest): NextResponse {
    return nextIntlMiddleware(req);
}

export const config = {
    // match only internationalized pathnames
    matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!_next|_vercel|.*\\..*).*)",
    ],
};