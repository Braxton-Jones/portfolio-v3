import { client_Portfolio_V3 } from '@/sanity/lib/client'
async function getPostData(slug) {
    const query = `*[ _type == "blogpost" && slug.current == "${slug}"]`
    const post = await client_Portfolio_V3.fetch(query)
    return post[0]
}

export default async function page({ params }) {
    const postData = await getPostData(params.blogSlug)
    const { title, Body } = postData

    return (
        <section className="mx-5 max-w-screen-sm">
            <h1 className="font-inconsolata text-2xl text-white">{title}</h1>
            {Body.map((block, index) => {
                if (block._type === 'block') {
                    return (
                        <p
                            key={index}
                            className="py-2 font-montserrat text-colorone"
                        >
                            {block.children[0].text}
                        </p>
                    )
                }
                if (block._type === 'image') {
                    return (
                        <img
                            key={index}
                            src={block.asset.url}
                            alt={block.alt}
                        />
                    )
                }
                return null
            })}
        </section>
    )
}
