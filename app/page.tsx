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
  } from "@/components/ui/card"
  

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
        <div className="mx-5 mb-5 flex max-w-screen-sm flex-col gap-14  ">
            {/* Currently Working On */}
            <div className="px-1">
                <h2 className="mb-2 font-montserrat text-sm font-bold text-white">
                    Currently :
                </h2>
                <p className="font-inconsolata font-normal tracking-wide text-colorone">
                    I am building things that interest me. I love building web
                    experiences where I can not only build out the
                    functionalities but consider the UI and how it feels and
                    behaves for users.
                </p>

                <p className="mt-1 font-inconsolata font-normal tracking-wide text-colorone">
                    {`Currently, I'm working on a new project named "Crates".
                    It's a playlist organizer using Spotify's API. I'm using Next.js,
                    TailwindCSS, and Typescript to build it out. See where I'm at -> `}
                    <Link
                        href={
                            'https://github.com/Braxton-Jones/crates_playlist_manager'
                        }
                        className="italic underline"
                    >
                        Crates
                    </Link>
                    .
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

            {/* What's new */}
            <section className="px-1">
                <h2 className="mb-3 font-montserrat text-sm font-bold text-white">
                    {`What's New :`}
                </h2>
                <Separator />
                <div className="mt-3 flex flex-col gap-3">
                    {/* <p className="font-montserrat text-sm font-bold text-white underline">Featured Post</p> */}
                    <Link href={`/blog/${featuredPost.slug.current}` || '#'}>
                        {/* <div className="box-border flex flex-col gap-3 rounded-xl bg-colorthree hover:brightness-75">
                            <img
                                src={urlForImage(featuredPost.Image)}
                                alt="featured post"
                                className="h-20 rounded-sm"
                            />
                            <h3 className="px-2 py-1 font-montserrat text-sm font-bold text-white">
                                {featuredPost.title}
                            </h3>
                            <p className="text-md px-2 pb-4 font-inconsolata leading-relaxed text-colorone">
                                {featuredPost.summary}
                            </p>
                        </div> */}
                        <Card className='bg-colorthree hover:scale border-opacity-0'>
                            <CardHeader>
                            <CardTitle className='font-montserrat text-md tracking-wide font-bold text-white'>Featured Post:</CardTitle>
                            <Image
                                    src={urlForImage(featuredPost.Image)}
                                    alt="featured post"
                                    height={200}
                                    width={200}
                                    className='rounded-sm w-full'
                                />
                                <CardTitle className='font-montserrat text-md tracking-wide font-bold text-white'>{featuredPost.title}</CardTitle>
                                <CardDescription className='font-inconsolata text-colorone leading-relaxed'>
                                    {featuredPost.summary}
                                </CardDescription>
                            </CardHeader>
                           
                        </Card>
                    </Link>
                </div>
            </section>

            {/* Projects */}
            <section className="px-1">
                <h2 className="mb-6 font-montserrat text-sm font-bold text-white">
                    Projects :
                </h2>
                <div className="flex flex-col gap-6">
                    {projects.map((project: any, index: number) => {
                        return (
                            <Link href={project.githubURL || '#'} key={index}>
                                <Card className='bg-colorthree hover:scale border-opacity-0'>
                                    <CardHeader>
                                        <CardTitle className='font-montserrat text-md tracking-wide font-bold text-white'>{project.Title}</CardTitle>
                                        <CardDescription className='font-inconsolata text-colorone leading-relaxed'>
                                            {project.Details}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
