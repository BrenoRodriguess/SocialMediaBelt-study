// Fazendo uma consulta no banco buscando o account do usuário
import type {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../lib/prisma";

type Data = {
    id: number
    name: string
    slug: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
)
    {
        const accounts = await prisma.account.findMany()
        res.status(200).json(accounts)
    }