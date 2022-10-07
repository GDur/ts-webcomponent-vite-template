FROM node:16.17-bullseye-slim AS builder

WORKDIR /app/frontend
COPY ["/package.json", "/package-lock.json*", "./"]

RUN npm install
COPY . .
RUN npm run build

FROM caddy
COPY --from=builder /app/frontend/dist/ /usr/share/caddy
COPY ./frontend/Caddyfile /etc/caddy/Caddyfile