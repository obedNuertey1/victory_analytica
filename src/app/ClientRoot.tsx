// app/ClientRoot.tsx
'use client'

import { useState, useEffect, ReactNode } from 'react'
import Splash from './components/Splash'

export default function ClientRoot({ children }: { children: ReactNode }) {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        // e.g. 2s minimum splash, or hook into real data readiness instead
        const t = setTimeout(() => setShowSplash(false), 5000)
        return () => clearTimeout(t)
    }, [])

    if (showSplash) {
        return <Splash />
    }

    return <>{children}</>
}
