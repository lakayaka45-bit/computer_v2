FROM node:20-alpine

WORKDIR /app

COPY hf-backend/package*.json ./
RUN npm install --omit=dev

COPY hf-backend ./

RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 7860

CMD ["npm", "start"]
