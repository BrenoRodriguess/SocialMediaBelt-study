// component fazendo o header porém necessário revisar pois não esta funcionando mesmo sendo importado em LayoutPublic ...
import Head from "next/head";

export default function Seo({title, description}: { title: string; description?: string })
    {
        return (<Head>
                <title>{title}</title>
                {description && <meta name="description" content={description}/>}
            </Head>

        )
    }