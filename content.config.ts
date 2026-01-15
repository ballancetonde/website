import { z } from 'zod'
import { defineCollection, defineContentConfig, property } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        events: defineCollection({
            // Load every file inside the `content` directory
            source: 'evenements/*.yml',
            // Specify the type of content in this collection
            type: 'data',
            schema: z.object({
                title: z.string(),
                date: z.string().datetime(),
                image: property(z.string()).editor({ input: 'media' }),
                address: z.string()
            })
        }),
        games: defineCollection({
            // Load every file inside the `content` directory
            source: 'ludotheque/*.md',
            // Specify the type of content in this collection
            type: 'page',
            schema: z.object({
                title: z.string(),
                seo: property(z.object({})).editor({ hidden: true }),
                navigation: property(z.object({})).editor({ hidden: true }),
                players: z.object({
                    min: z.number(),
                    max: z.number(),
                }),
                play_time_mins: z.number(),
                donation: z.boolean(),
                purchase_date: z.string().date(),
                video: z.string(),
                image: property(z.string()).editor({ input: 'media' }),
            })
        })
    }
})
