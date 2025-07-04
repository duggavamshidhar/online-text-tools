# syntax=docker.io/docker/dockerfile:1

# Base image with Node.js
FROM node:22-alpine AS base

# Install dependencies
FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN if [ -f yarn.lock ]; then \
        yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
        npm ci --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm i --frozen-lockfile; \
    else \
        echo "No lockfile found. Exiting." && exit 1; \
    fi

# Build stage
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN if [ -f yarn.lock ]; then \
        yarn build; \
    elif [ -f package-lock.json ]; then \
        npm run build; \
    elif [ -f pnpm-lock.yaml ]; then \
        corepack enable pnpm && pnpm run build; \
    else \
        echo "No lockfile found. Exiting." && exit 1; \
    fi

# Production stage
FROM base AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

RUN adduser --system --uid 1001 admin

COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules/
COPY --from=builder /app/.next/ ./.next/
COPY --from=builder /app/public/ ./public/

RUN chown -R admin /app

USER admin

EXPOSE 3000

ENV PORT=3000

RUN if ! grep -q '"start":' package.json; then \
        echo 'Error: No "start" script found in package.json. Exiting.' && exit 1; \
    fi

CMD ["npm", "run", "start"]
