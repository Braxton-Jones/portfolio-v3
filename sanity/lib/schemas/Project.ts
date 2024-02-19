type Project = {
    title: string
    name: string
    type: string
    githubUrl: string
    liveUrl: string
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

const Project: Project = {
    title: 'Project',
    name: 'Project',
    type: 'document',
    githubUrl: 'string',
    liveUrl: 'string',
    fields: [
        {
            title: 'Project Title',
            name: 'Title',
            type: 'string',
        },
        {
            title: 'Order',
            name: 'Order',
            type: 'number',
        },
        {
            title: 'Project Description',
            name: 'Details',
            type: 'text',
        },
        {
            title: 'Project URL',
            name: 'projectUrl',
            type: 'string',
        },
        {
            title: 'Project Github URL',
            name: 'githubURL',
            type: 'string',
        },
    ],
}

export default Project
