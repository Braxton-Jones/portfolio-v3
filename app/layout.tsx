import type { Metadata } from 'next'
import { Montserrat, Inconsolata } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

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
            <body className="background-color_custom box-content flex flex-col items-center">
                <main className="flex flex-col justify-center pb-8">
                    <div className="mx-5 my-10 flex max-w-screen-sm items-center justify-between">
                        <div>
                            <h1 className="min-w-full px-1 font-montserrat text-lg font-semibold text-white">
                                Braxton Jones
                            </h1>
                            <p className="px-1 font-inconsolata font-light tracking-wide text-colorone">
                                Web Developer
                            </p>
                            <Link
                                href="/BraxtonJonesResume.pdf"
                                target="_blank"
                                className="mb-2 h-min w-max rounded-sm px-1 py-2 text-center font-inconsolata text-colorone underline  hover:bg-gray-100 hover:bg-opacity-5 hover:text-purple-300"
                            >
                                Resume
                            </Link>
                        </div>
                        <div className="flex gap-2 font-inconsolata text-white">
                            <Link
                                href="/"
                                className="underline hover:text-colortwo"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="underline hover:text-colortwo"
                            >
                                About
                            </Link>
                            <Link
                                href="/blog"
                                className="underline hover:text-colortwo"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                    {children}
                </main>
            </body>
        </html>
    )
}
