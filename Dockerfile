# ── Stage 1: build ─────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

RUN npm install -g pnpm@10

WORKDIR /app
COPY . .

RUN NODE_OPTIONS=--max-old-space-size=4096 pnpm install --no-lockfile
RUN sh build-vercel.sh

# ── Stage 2: serve ─────────────────────────────────────────────────────────
FROM nginx:alpine

COPY --from=builder /app/artifacts/bseg-home/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
