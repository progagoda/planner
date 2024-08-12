import { NextResponse, type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { type Locale, locales } from "./configs/i18n";
export { default } from "next-auth/middleware"

const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: "en" satisfies Locale,
    localePrefix: "never",
});



export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('next-auth.session-token')?.value
   
    if (!currentUser && !request.nextUrl.pathname.startsWith('/welcome') && !request.nextUrl.pathname.startsWith('/api')) {
        return Response.redirect(new URL('/api/auth/signin', request.url))
    }
    return nextIntlMiddleware(request);
}

export const config = {
    // match only internationalized pathnames
    matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!_next|_vercel|.*\\..*).*)",
        '/!api',
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    ],
};
   