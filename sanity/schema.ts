import { type SchemaTypeDefinition } from 'sanity'
import Project from './lib/schemas/Project'
import Post from './lib/schemas/Post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [Project, Post],
}
