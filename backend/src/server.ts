import { app } from "./app.js";
import { userRoutes } from "./routes/UserRoutes.js";

app.register(userRoutes);

// No final do seu server.ts
const start = async () => {
  try {
    // Note que não usamos .then() nem callback aqui
    await app.listen({ port: 3333, host: '0.0.0.0' });
    console.log("🔥 Servidor rodando em http://localhost:3333");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();