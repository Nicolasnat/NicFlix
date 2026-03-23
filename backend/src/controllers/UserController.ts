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
    },
    userCreate: async ( request: FastifyRequest, reply: FastifyReply) => {
        try{
            const {name, email, password} = request.body as any;

            if(!name || !email || !password){
                return reply.status(400).send("Nome, email e senha são obrigatorios")
            }


            const user = await UserService.createUsers(name, email, password);

            return reply.status(201).send(user);
        } catch (error){
            console.error("erro: ", error);
            return reply.status(500). send({error: "erro ao criar usuario"});
        }
    }
}