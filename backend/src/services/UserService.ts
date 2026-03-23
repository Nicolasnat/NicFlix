import { prisma } from "../database/prisma.js";

export const UserService = { listarUsers: async () => {
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
}
};