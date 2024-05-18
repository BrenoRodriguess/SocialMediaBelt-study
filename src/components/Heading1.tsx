// esse component esta sendo importado na pagina após o login do usuário, localizado em /app/[tenantId]
import React from "react";

export default function Heading1({children}: { children: React.ReactNode })
    {
        return (
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                {children}
            </h1>

        )
    }