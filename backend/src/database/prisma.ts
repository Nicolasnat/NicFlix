// src/database/prisma.ts
import { PrismaClient } from '@prisma/client';

// Criamos a instância do Prisma
const prisma = new PrismaClient();

// Exportamos para usar em outros arquivos (Services)
export { prisma };

// Pequeno teste de conexão que roda assim que o servidor liga
async function testConnection() {
  try {
    await prisma.$connect();
    console.log("🚀 [Database]: Conectado ao PostgreSQL com sucesso!");
  } catch (error) {
    console.error("❌ [Database]: Erro ao conectar no banco:", error);
  }
}

testConnection();