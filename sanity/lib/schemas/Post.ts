type Post = {
    title: string
    name: string
    type: string
    featured: boolean
    fields: Field[]
}

type Field = {
    title: string
    name: string
    type: string
    description?: string
    options?: {
        hotspot: boolean
    }
    of?: {
        type: string
    }[]
}

const Post: Post = {
    title: 'BlogPost',
    name: 'blogpost',
    type: 'document',
    featured: false,
    fields: [
        {
            title: 'Accent Image',
            name: 'Image',
            type: 'image',
            description:
                'This image will be used as the post image for the Post',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Summary',
            name: 'summary',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
        },
        {
            name: 'Body',
            title: 'body',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}

export default Post
