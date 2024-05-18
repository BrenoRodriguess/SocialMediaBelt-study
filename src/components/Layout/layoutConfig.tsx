// Aqui estou configurando as rotas dos meus layouts...
'use client'

import {ReactNode} from "react";
import LayoutApp from "@/components/Layout/LayoutApp";
import {usePathname} from "next/navigation";
import LayoutPublic from "@/components/Layout/LayoutPublic";
import LayoutTenant from "@/components/Layout/LayoutTenant";


export default function LayoutConfig({children}: { children: ReactNode })
    {
        const Pathname = usePathname();

        let Layout = LayoutPublic

        if (Pathname.indexOf('/app') === 0) {
            Layout = LayoutApp
        }
        if (Pathname.indexOf('/[slug]') === 0) {
            Layout = LayoutTenant
        }
        console.log('pathname: ', Pathname);
        return (
            <html>
            <body>
            <Layout>
                <div>{children}</div>
            </Layout>
            </body>
            </html>
        )
    }
