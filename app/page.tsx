import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { client_Portfolio_V3 } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

async function getProjects() {
    const query = `*[_type == "Project"]`
    const projects = await client_Portfolio_V3.fetch(query)
    return projects
}

async function getFeaturedPost() {
    const query = `*[_type == "blogpost" && featured == true]`
    const post = await client_Portfolio_V3.fetch(query)
    return post[0]
}

export default async function Home() {
    const projects = await getProjects()
    const featuredPost = await getFeaturedPost()

    return (
        <div className="mx-5 mb-5 flex max-w-screen-sm flex-col gap-10  ">
            {/* Header */}
            <div>
                <h2 className="mb-2 font-montserrat text-sm font-bold text-white">
                    {`About Me:`}
                </h2>
                <p className="font-inconsolata font-normal tracking-wide text-colorone">
                    {`
                    I'm a web developer based in Annapolis, Maryland. I've been learning and building web applications for the past 4 years. 
                    I'm passionate about building web experiences that are not only functional but also beautiful and intuitive.
                    `}
                </p>

                <div className="mt-2 flex flex-col">
                    <Separator />
                    <div className="mt-2 flex gap-3">
                        <Link
                            href="mailto:braxtonjonesdev@gmail.com"
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

            {/* Currently Working On */}
            <div className="px-1">
                <h2 className="mb-2 font-montserrat text-sm font-bold text-white">
                    {`What I'm Working On:`}
                </h2>

                <p className="mt-1 font-inconsolata font-normal tracking-wide text-colorone">
                    {`
                    Currently I'm working on a few projects; a playlist managment app, a word game and an employee onboarding system.
                    I'm putting most of my time into the word game, see where I'm at -> 
                    `}
                    <Link
                        href={'https://matchanym-game.netlify.app/'}
                        className="italic underline"
                    >
                        Matchanym
                    </Link>
                    .
                </p>
            </div>

            
            <div>
                <Link
                    href={'https://matchanym-game.netlify.app/'}
                    className="italic underline hover:bg-colorone hover:opacity-20"
                >
                    <p className="font-montserrat text-sm font-bold text-white border p-2 rounded-lg w-fit ">
                    {`✨ Play my word game, Matchanym`}
                    </p>
                </Link>
            </div>

            {/* Projects */}
            <section className="px-1">
                <h2 className="font-montserrat text-lg font-black text-white">
                    {`Projects :`}
                </h2>
                <Separator className="my-3" />
                <div className="flex flex-col gap-2">
                    {projects.map((project: any, index: number) => {
                        // project.Title
                        // project.Details
                        return (
                            <Link
                                key={index}
                                href={project.projectUrl || '#'}
                                className="flex rounded-sm p-3 hover:bg-colortwo hover:bg-opacity-10"
                            >
                                {project.Image ? (<div>
                                    <Image
                                        src={urlForImage(project.Image) ||`#`}
                                        alt={project.Title}
                                        height={100}
                                        width={100}
                                        className='rounded-sm w-full h-full'
                                    />
                                </div>) : null}
                            
                                <div>
                                    <h2 className="font-montserrat text-md font-black tracking-wider text-white">
                                        {project.Title}
                                    </h2>
                                    <p className="font-inconsolata text-sm text-colorone">
                                        {project.Details}
                                    </p>
                                    <div className='flex gap-2 flex-wrap mt-1'>
                                        {project.TechStack?.map((tech: any, index: number) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="font-inconsolata text-xs text-colorone bg-black px-3 py-1 rounded-xl w-fit"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* What's new */}
            <section className="px-1">
                <h2 className="mb-3 font-montserrat text-lg font-bold text-white">
                    {`Blog Posts:`}
                </h2>
                <Separator />
                <div className="mt-3 flex flex-col gap-3">
                    {/* <p className="font-montserrat text-sm font-bold text-white underline">Featured Post</p> */}
                    <Link href={`/blog/${featuredPost.slug.current}` || '#'}>
                        <section className="flex gap-2">
                            <Image
                                src={urlForImage(featuredPost.Image) || `#`}
                                alt={featuredPost.title}
                                height={100}
                                width={100}
                                className="rounded-sm"
                            />
                            <div>
                            <h1 className="font-montserrat text-sm font-bold text-white">
                                {featuredPost.title}
                            </h1>
                            <p className="font-inconsolata text-sm text-colorone">
                                {featuredPost.summary}
                            </p>
                            </div>
                        </section>
                    </Link>
                </div>
            </section>
        </div>
    )
}
