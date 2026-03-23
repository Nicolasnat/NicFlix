import type { FastifyInstance } from "fastify";
import { UserController } from "../controllers/UserController.js";

export async function userRoutes (app: FastifyInstance){
    app.get("/users", UserController.indexUser);

    app.get("/users/:id", UserController.showUser);
}
