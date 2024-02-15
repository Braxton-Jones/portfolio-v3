import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client_Portfolio_V3 = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
