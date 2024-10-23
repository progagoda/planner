FROM node:18.17.0-alpine AS builder
WORKDIR /app
COPY /package.json ./
RUN npm i
COPY . .
RUN  npx nx reset && npm run build

FROM node:18.17.0-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 4200
CMD ["npm", "run", "start:prod"]