import { z } from 'zod'
import { defineCollection, defineContentConfig, property } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        events: defineCollection({
            source: 'evenements/*.yml',
            type: 'data',
            schema: z.object({
                title: z.string(),
                start_date: z.string().datetime(),
                end_date: z.string().datetime().optional(),
                image: property(z.string()).editor({ input: 'media' }),
                address: z.string(),
                to: z.string().optional(),
                featured: z.boolean().default(false).optional(),
            })
        }),
        games: defineCollection({
            source: 'ludotheque/*.md',
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
        }),
        pages: defineCollection({
            source: {
                include: '**/*.md',
                exclude: [
                    'ludotheque/*.md',
                ],
            },
            type: 'page',
        })
    }
})
