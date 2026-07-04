FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app

# Copy backend package files and install only backend dependencies
COPY server/package*.json ./
RUN npm install --production

# Copy Prisma schema and server source code
COPY prisma ./prisma
COPY server ./

# Generate Prisma client and apply schema
RUN npm run prisma:generate
RUN npm run db:push

EXPOSE 3001
USER appuser
CMD ["npm", "run", "start"]
