const post = {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Accent Image',
            name: 'accentImage',
            type: 'image',
            description: 'This image will be used as the accent image for the post',
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Post Title',
            name: 'postTitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'string',
        }
    ]
};

export default post;
