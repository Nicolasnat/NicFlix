import fastifyJwt from "@fastify/jwt";
import Fastify from "fastify";


export const app =  Fastify({
    logger: true
});

app.register(fastifyJwt, {
    secret:'Nicflix'
})