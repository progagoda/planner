export const port = process.env.PORT ?? 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;

export const api = process.env.API
    ? `${process.env.API}`
    : `http://localhost:3001/graphql`;