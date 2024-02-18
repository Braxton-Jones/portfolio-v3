import { client_Portfolio_V3 } from "@/sanity/lib/client"
async function getBlogPosts() {
    const query = `*[_type == "Post"]`
    const posts = await client_Portfolio_V3.fetch(query)
    return posts

}
export default async function Blog() {
    const posts = getBlogPosts()
    console.log("Posts:", posts)
  return (
    <div>page</div>
  )
}
