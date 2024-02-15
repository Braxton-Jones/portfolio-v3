type Project ={
    title: string;
    name: string;
    type: string;
    githubUrl: string;
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
    githubUrl: 'string',
    liveUrl: 'string',
    fields: [
        {
            title: 'Project Title',
            name: 'projectTitle',
            type: 'string',
        },
        {
            title: 'Project Description',
            name: 'projectDescription',
            type: 'text',
        },
        {
            title: 'Project Image',
            name: 'projectImage',
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