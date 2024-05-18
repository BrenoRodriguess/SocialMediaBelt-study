// esse component esta sendo importado na pagina após o login do usuário, localizado em /app/[tenantId]
import React from "react";

export default function Heading2({children}: { children: React.ReactNode })
    {
        return (
            <h2 className="text-gray-400 text-md">
                {children}
            </h2>

        )
    }