import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    const databaseUrl = process.env.DATABASE_URL;

    if (databaseUrl) {
        const url = new URL(databaseUrl);
        if (process.env.NODE_ENV === "development") {
            console.log(` Database connection: ${url.protocol}//${url.hostname}:${url.port || '3306'}`);
            console.log(`🔒 SSL Mode: ${url.searchParams.get('sslmode') || 'not specified'}`);
        }
    } else if (process.env.NODE_ENV === "production") {
        throw new Error('DATABASE_URL environment variable is required in production');
    }

    return new PrismaClient({
        log: process.env.NODE_ENV === "development"
            ? ['query', 'info', 'warn', 'error']
            : ['error', 'warn'],
    });
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;