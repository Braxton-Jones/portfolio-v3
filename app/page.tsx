import { Separator } from '@/components/ui/separator'
import CustomNavbar from './components/CustomNavbar'
import Link from 'next/link'
import { client_Portfolio_V3 } from "@/sanity/lib/client"
import { Suspense } from 'react'

async function getProjects() {
    const query = `*[_type == "Project"]`
    const projects = await client_Portfolio_V3.fetch(query)
    return projects
}


export default async function Home() {
    const projects = await getProjects()
    console.log("Projects:", projects[0])

    return (
        <main className="box-border flex h-screen justify-center ">
            <div className="mx-6 my-10 flex max-w-screen-md flex-col gap-14  ">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="px-1 font-montserrat font-semibold text-white">
                            Braxton Jones
                        </h1>
                        <p className="px-1 font-inconsolata font-light tracking-wide text-colorone">
                            Software Engineer
                        </p>
                        <Link
                            href="#"
                            className="mb-2 h-min w-max rounded-sm px-1 py-2 text-center font-inconsolata text-colorone underline  hover:bg-gray-100 hover:bg-opacity-5 hover:text-purple-300"
                        >
                            Resume
                        </Link>
                    </div>
                    <CustomNavbar />
                </div>

                {/* Currently Working On */}
                <div className="px-1">
                    <h2 className="font-montserrat text-sm font-bold text-white mb-2">
                        Currently :
                    </h2>
                    <p className="font-inconsolata font-normal tracking-wide text-colorone">
                        I like to build things for designers and developers, and
                        think deeply about the user interface, how it looks,
                        feels, behaves.
                    </p>

                    <div className="mt-2 flex flex-col">
                        <Separator />
                        <div className="mt-2 flex gap-3">
                            <Link
                                href=""
                                className="mb-2 h-min w-max rounded-sm p-1.5 text-center font-inconsolata text-colorone underline  hover:bg-gray-100 hover:bg-opacity-5 hover:text-purple-300"
                            >
                                Contact
                            </Link>
                            <Link
                                href="https://github.com/Braxton-Jones"
                                className="h-min w-max rounded-sm p-1.5 text-center font-inconsolata text-colorone underline  hover:bg-gray-100 hover:bg-opacity-5 hover:text-github"
                            >
                                Github
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/braxtonjonesdev/"
                                className="w-1max h-min rounded-sm p-1.5 text-center font-inconsolata text-colorone underline hover:bg-gray-100 hover:bg-opacity-5 hover:text-linkedin"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://twitter.com/brxjonesdev"
                                className="h-min w-max rounded-sm p-1.5 text-center font-inconsolata text-colorone underline  hover:bg-gray-100 hover:bg-opacity-5 hover:text-twitter"
                            >
                                Twitter/X
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <section className="px-1">
                    <h2 className="font-montserrat text-sm font-bold text-white mb-2">
                        Projects :
                    </h2>
                    <div className='flex flex-col gap-2'>
                        {projects.map((project: any) => {
                            return (
                                <Link href={project.projectUrl || "#"}>
                                <div>
                                    <h3 className="font-montserrat text-xs font-bold text-white">
                                        {project.projectTitle}
                                    </h3>
                                    <p className="font-inconsolata text-colorone">
                                        {project.projectDescription}
                                    </p>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                
                </section>
               
            </div>
        </main>
    )
}

// inconsolata
