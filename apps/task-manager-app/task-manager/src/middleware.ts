import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createMiddleware from "next-intl/middleware";
import { type Locale, locales } from "./configs/i18n";
import { homePageURL, kanbanFeatureURL } from "@/configs/constants";


const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: "en" satisfies Locale,
    localePrefix: "never",
});

const isProtectedRoute = createRouteMatcher([`/${kanbanFeatureURL}/(.*)`, homePageURL])

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect()
    return nextIntlMiddleware(req);
})

export const config = {
    // match only internationalized pathnames
    matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!_next|_vercel|.*\\..*).*)",
        '/!api',
        // '/((?!sign-in).*)', 
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
        '/sign-in(.*)',
        '/sign-up(.*)'
    ],
};
   