import { prisma } from "../database/prisma.js";

export const UserService = { 
    listarUsers: async () => {
        const readUserService = await prisma.users.findMany();
        
        if(readUserService.length == 0){
            console.log("Tabela do banco de dados vazia")
        }

        return readUserService;
        }, 
        buscarPorID: async (id: number) => {
            
            const readUserId = await prisma.users.findUnique({where:{id: id}});

            if(!readUserId){
                return null;
            }

            return readUserId;
        },
        createUsers: async (nome: string, email: string, password: string) => {
            const userCreate = await prisma.users.create({
                data:{
                name: nome,
                email: email,
                password: password
                }
            });

            return userCreate;
        },
        login: async (email: string, password: string) => {
            const userEmail = await prisma.users.findUnique({where: {
                email: email
            }});

            if(!userEmail || userEmail.password !== password){
                return null;
            }

            return userEmail;
        }
};