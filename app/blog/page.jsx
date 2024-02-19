import { client_Portfolio_V3 } from '@/sanity/lib/client'
import Link from 'next/link'
async function getBlogPosts() {
    const query = `*[_type == "blogpost"]`
    const posts = await client_Portfolio_V3.fetch(query)
    return posts
}
export default async function Blog() {
    const posts = await getBlogPosts()
    console.log('Posts:', posts)
    return (
        <section className="mx-5 w-full">
            <div className="mb-5 flex flex-col gap-4">
                <h1 className="font-montserrat text-lg font-bold text-white ">
                    Blog
                </h1>
                <p className="font-montserrat text-colorone">
                    {posts.length} post{posts.length > 1 ? 's' : ''} about my
                    experiences, thoughts and projects.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                {posts.map((post, index) => {
                    return (
                        <Link href={`/blog/${post.slug.current}`} key={index}>
                            <div
                                key={index}
                                className="flex flex-col gap-2 rounded-md bg-colorthree p-3 hover:brightness-75 "
                            >
                                <h2 className="text-md font-montserrat text-white">
                                    {post.title}
                                </h2>
                                <p className="font-inconsolata text-sm text-colorone">
                                    {post.summary}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}
