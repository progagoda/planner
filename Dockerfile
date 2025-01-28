FROM node:18.17.0-alpine AS builder
WORKDIR /app
COPY /package.json ./
RUN npm ci --ignore-scripts
COPY ./apps ./apps
RUN npx nx reset && npm run build

RUN addgroup -S nonroot && adduser -S nonroot -G nonroot
FROM node:18.17.0-alpine AS runner
USER nonroot
WORKDIR /app 
COPY --from=builder /app ./
EXPOSE 4200
CMD ["npm", "run", "start:prod"]