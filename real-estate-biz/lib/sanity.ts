import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  // Hardcoded for stability in public client-side fetches
  projectId: 'uzal2rqx', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-25',
})

const builder = imageUrlBuilder(client)

// Standard helper to transform Sanity image objects into URL strings
export function urlFor(source: any) {
  return builder.image(source)
}