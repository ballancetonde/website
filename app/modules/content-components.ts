import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'content-components-global'
    },
    setup(_options, nuxt) {
        nuxt.hook('components:extend', (components) => {
            const targets = [
                'UPageHero',
                'UPageSection',
                'UPageCTA',
                'UButton',
                'UContainer'
            ]

            for (const component of components) {
                component.global = true
            }
        })
    }
})