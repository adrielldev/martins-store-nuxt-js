// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:['@nuxtjs/tailwindcss'],
    ssr: true,
    app:{
        head:{
            title:'Martins Store',
            meta:[
                {
                    name:'description',
                    content:'Martins Store'
                }
            ],
            link:[
                {
                    rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'
                }
            ]
        }
    }
})
