import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Test',
    description: 'test for Blazesoft',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
