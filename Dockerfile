FROM node:18.17.0-alpine AS builder
WORKDIR /app
COPY /package.json ./
RUN npm i
COPY ./apps ./apps
RUN  npx nx reset && npm run build && addgroup -S nonroot \  && adduser -S nonroot -G nonroot

USER nonroot
FROM node:18.17.0-alpine AS runner
WORKDIR /app 
COPY --from=builder /app ./
EXPOSE 4200
CMD ["npm", "run", "start:prod"]