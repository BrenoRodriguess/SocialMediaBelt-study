// Aqui é um component que está sendo importado em LayoutApp, fazendo uma validação de seleção, se estiver seleciona ele manda o classname...
'use client'

import Link from "next/link";
import {ReactNode} from "react";
import {usePathname} from "next/navigation";


export default function LinkMenu({children, href}: {
    children: ReactNode,
    href: string,
})
    {
        const Pathname = usePathname();
        const isSelected = Pathname === href;

        return (
            <Link legacyBehavior href={href}>
                <a className={isSelected ? 'flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white' : 'flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800'}>
                    {children}
                </a>
            </Link>
        );
    }