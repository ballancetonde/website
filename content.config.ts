import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        events: defineCollection({
            // Load every file inside the `content` directory
            source: 'evenements/**',
            // Specify the type of content in this collection
            type: 'page',
            schema: z.object({
                date: z.string().datetime(),
                image: z.string().editor({ input: 'media' }),
                address: z.string()
            })
        })
    }
})
