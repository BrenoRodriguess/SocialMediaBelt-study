// configuração do provider utilizado para login (Github), e validação de account para a criação de um novo tenanat se for o primeiro acesso,
// criando relacionamento de usuarios e tenants, e criação de seção (session)
import NextAuth, {AuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "../../../../../lib/prisma";
import {NextAuthOptions} from 'next-auth';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
    },

    callbacks: {
        async jwt({token, user, account, profile}){
            if (account) {
                const accounts = await prisma.tenant.findFirst({
                    where: {
                        users: {
                            some: {
                                userId: user.id
                            }
                        }
                    }
                })
                if (!accounts) {
                    const tenant = await prisma.tenant.create({
                        data: {
                            name: 'Meu tenant',
                            image: '',
                            slug: 'meutenant',
                            plan: 'free'

                        }
                    })
                    const userOnTenant = await prisma.usersOnTenants.create({
                        data: {
                            userId: user.id,
                            tenantId: tenant.id,
                            role: 'owner'
                        }
                    })

                    const session = await prisma.session.create({
                        data: {
                            userId: user.id,
                            sessionToken: token.sub,
                        }
                    })
                }
            }
            return token;
        }
    },

    debug: false
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};