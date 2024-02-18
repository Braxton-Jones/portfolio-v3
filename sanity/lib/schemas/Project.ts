type Project ={
    title: string;
    name: string;
    type: string;
    githubUrl: string;
    order: number;
    liveUrl: string;
    fields: Field[];
};

type Field = {
    title: string;
    name: string;
    type: string;
    description?: string;
    options?: {
        hotspot: boolean;
    };
    of?: {
        type: string;
    }[];
};

const Project: Project = {
    title: 'Project',
    name: 'Project',
    type: 'document',
    order: 1,
    githubUrl: 'string',
    liveUrl: 'string',
    fields: [
        {
            title: 'Project Title',
            name: 'Title',
            type: 'string',
        },
        {
            title: 'Project Long Description',
            name: 'DetailedDescription',
            type: 'text',
        },
        {
            title: 'Project Short Description',
            name: 'ShortDescription',
            type: 'text',
        },
        {
            title: 'Project Image',
            name: 'Image',
            type: 'image',
            description: 'This image will be used as the project image for the Project',
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Project URL',
            name: 'projectUrl',
            type: 'string',
        },
        {
            title: 'Project Github URL',
            name: 'projectGithubUrl',
            type: 'string',
        },
    ],
};

export default Project;