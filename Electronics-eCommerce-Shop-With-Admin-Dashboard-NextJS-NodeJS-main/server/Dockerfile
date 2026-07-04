FROM node:20-alpine

# Use a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only package files first for faster install
COPY server/package*.json ./server/
COPY prisma ./prisma

WORKDIR /app/server

# Install backend dependencies
RUN npm install --production

# Copy backend source code
COPY server ./server

# Generate Prisma client and push schema
RUN npm run prisma:generate
RUN npm run db:push

EXPOSE 3001

USER appuser

CMD ["npm", "run", "start"]
