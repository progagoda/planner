import { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {compact} from 'lodash-es'
import {envConfig} from '@shared/configs'
export const nextAuthConfig: AuthOptions = {
    // Configure one or more authentication providers
    providers: compact([
        envConfig.GITHUB_ID && envConfig.GITHUB_SECRET &&
    GithubProvider({
        clientId: envConfig.GITHUB_ID,
        clientSecret: envConfig.GITHUB_SECRET,
    }),
    // ...add more providers here
    ]),
}