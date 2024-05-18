import React from "react";

export default function LayoutTenant({children}: { children: React.ReactNode })
    {
        return (
            <>
                <h1>Tenant Layout</h1>
                {children}
            </>
        )
    }