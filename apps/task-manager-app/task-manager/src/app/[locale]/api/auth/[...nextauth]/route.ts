import NextAuth from "next-auth/next";
import { nextAuthConfig } from '@entities/session/next-auth-config' 

const authHandler = NextAuth(
    {...nextAuthConfig});

export { authHandler as GET, authHandler as POST };