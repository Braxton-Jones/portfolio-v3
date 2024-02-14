import type { Metadata } from 'next'
import { Montserrat, Inconsolata } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
    title: 'Portfolio for Braxton Jones',
    description: 'Portfolio for Braxton Jones',
}

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
})

const inconsolata = Inconsolata({
    subsets: ['latin'],
    variable: '--font-inconsolata',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className={`${inconsolata.variable} ${montserrat.variable}`}
        >
            <body className="background-color_custom">{children}</body>
        </html>
    )
}
