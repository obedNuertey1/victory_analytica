// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Type-safe global variable declaration
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Initialize the Prisma Client
export const prisma: PrismaClient = (() => {
  if (isDevelopment && global.prisma) {
    return global.prisma;
  }
  return new PrismaClient({
    log: isDevelopment ? ['query', 'info', 'warn', 'error'] : ['error']
  });
})();

// Store in global variable in development
if (isDevelopment) {
  global.prisma = prisma;
}

export default prisma;