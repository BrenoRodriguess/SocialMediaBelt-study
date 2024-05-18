// Aqui é o primeiro layout onde o usuario irá fazer o login com o provider github que estou configurando do next/auth, onde o callbackUrl esta mandando ele para '/app/id-tenant'...

'use client'

import {useState, useEffect} from 'react';
import Link from "next/link";
import Seo from "@/components/Seo";
import {signIn} from "next-auth/react";

export default function Home()
    {

        const [mounted, setMounted] = useState(false);
        useEffect(() =>
        {
            setMounted(true)
        }, [])

        return mounted && <div>
            <Seo title={'Social Media Belt'} description={'Social Media Belt'}/>
            <ul>
                <li>
                    <Link legacyBehavior href={'/app'}><a>App</a></Link></li>
                <li>
                    <Link legacyBehavior href={'/devpleno'}><a>Tenant devpleno</a></Link></li>
            </ul>
            <p>
                <button onClick={() => signIn('github', {callbackUrl: '/app/id-tenant'})}>Login com Github</button>
            </p>
        </div>
    }
