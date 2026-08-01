export default defineAppConfig({
    ui: {
        colors: {
            primary: 'green',
            neutral: 'zinc'
        },
    },
    menu: [
        {
            label: 'Événements',
            to: '/evenements',
        },
        {
            label: 'Festival',
            to: '/festival',
        },
        {
            label: 'Ludothèque',
            to: '/ludotheque',
        },
    ],
})