import type {FastifyReply, FastifyRequest} from "fastify";
import { UserService } from "../services/UserService.js";

export const UserController = {
    indexUser: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const users = await UserService.listarUsers();

            return reply.send(users);
        } catch (error){
            return reply.status(500).send({error: "Erro ao buscar dados"})
        }
    },
    showUser: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const { id } = request.params as { id: string };
            const users = await UserService.buscarPorID(Number(id));

            return reply.send(users);
        } catch (error){
            console.error("erro: ", error);
            return reply.status(500).send({error: "Erro ao buscar dados"})
        }
    }
}