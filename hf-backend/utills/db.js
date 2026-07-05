// Prefer the root-level Prisma Client (generated from ../prisma/schema.prisma),
// which includes bulk upload models. Fallback to package resolution if needed.
const path = require('path');
let PrismaClient;
try {
    ({ PrismaClient } = require(path.resolve(__dirname, '..', '..', 'node_modules', '@prisma/client')));
} catch (e) {
    try {
        ({ PrismaClient } = require('@prisma/client'));
    } catch (fallbackError) {
        throw new Error(`Unable to load Prisma Client: ${fallbackError.message}`);
    }
}

const prismaClientSingleton = () => {
    if (!process.env.DATABASE_URL) {
        process.env.DATABASE_URL = 'mysql://root:@127.0.0.1:3306/computer_shop?connection_limit=5';
    }

    // Parse DATABASE_URL to check SSL configuration
    const databaseUrl = process.env.DATABASE_URL;
    const url = new URL(databaseUrl);
    
    // Log SSL configuration for debugging
    if (process.env.NODE_ENV === "development") {
        console.log(` Database connection: ${url.protocol}//${url.hostname}:${url.port || '3306'}`);
        console.log(`🔒 SSL Mode: ${url.searchParams.get('sslmode') || 'not specified'}`);
    }

    return new PrismaClient({
        // Add logging for debugging
        log: process.env.NODE_ENV === "development" 
            ? ['query', 'info', 'warn', 'error']
            : ['error', 'warn'],
    });
}

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

module.exports = prisma;

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;