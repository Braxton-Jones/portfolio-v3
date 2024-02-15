import { type SchemaTypeDefinition } from 'sanity'
import Project from './lib/schemas/Project'
import post from './lib/schemas/Post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [Project, post]
}

