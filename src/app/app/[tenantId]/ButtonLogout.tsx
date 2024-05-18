// Botão de logout, sendo importado na tela do usuário, para que seja possivel ele deslogar e ser redireciona para o LayoutPublic
'use client'

import {signOut} from "next-auth/react";

export default function ButtonLogout()
    {
        return (<button onClick={() => signOut()}>Logout</button>)
    }