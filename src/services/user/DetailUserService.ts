import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){

        const user= await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{  // aqui vc marca o que vc quer devolver. No nosso caso tiramos o password
                id:true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { DetailUserService }