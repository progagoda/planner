import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';
import createMiddleware from "next-intl/middleware";
import { type Locale, locales } from "./configs/i18n";
import { homePageURL, dashboardPageURL, createScopeURL, welcomePageURL  } from "@/configs/constants";


const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: "en" satisfies Locale,
    localePrefix: "never",
});

const isProtectedRoute = createRouteMatcher([`${dashboardPageURL}/(.*)`, homePageURL, `${createScopeURL}/(.*)`])

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)){ 
        const authFunc = auth()
        authFunc.protect()
        if(authFunc.orgId && !req.nextUrl.pathname.includes(authFunc.orgId)){
            const path = new URL(`${dashboardPageURL}/${authFunc.orgId}`, req.url)
            return NextResponse.redirect(path)
        }

        if (authFunc.userId && !authFunc.orgId && req.nextUrl.pathname!== welcomePageURL){
            const createScope = new URL(createScopeURL, req.url)
            return NextResponse.redirect(createScope);
        }
    }
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
   