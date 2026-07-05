FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npx prisma generate --schema=./prisma/schema.prisma

# Create logs directory with correct ownership before switching user
RUN mkdir -p /app/logs && chown -R appuser:appgroup /app/logs

EXPOSE 7860

USER appuser

CMD ["sh", "-c", "npx prisma db push --schema=./prisma/schema.prisma && node createAdminUser.js admin@admin.com Admin@1234 ; node app.js"]
