//busca de tenant do usuário
import {getServerSession} from "next-auth/next";
import type {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../../lib/prisma";


type TenantData = {
    id: string
    name: string
    slug: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TenantData[]>
)
    {
        const session = getServerSession(req, res);

        if (session) {
            const tenants = await prisma.tenant.findMany({
                where: {
                    users: {
                        some: {
                            userId: session
                        }
                    }
                }
            })
            console.log(tenants)
        }
    }