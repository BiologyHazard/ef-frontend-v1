// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false, // 启用SSG渲染
    app: {
        head: {
            title: '终末地一图流', link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},],
        },
    },

    compatibilityDate: '2025-11-05', devtools: {enabled: true}, css: ['~/assets/css/global.css'],

    modules: ['@nuxtjs/i18n', (_options, nuxt) => {
        nuxt.hooks.hook('vite:extendConfig', (config) => {
            // @ts-expect-error
            config.plugins.push(vuetify({autoImport: true}))
        })
    }],

    i18n: {
        locales: [{
            code: 'zh-CN', label: '中文', file: 'zh-CN.json'
        }, {
            code: 'en-US', label: 'English', file: 'en-US.json'
        }], langDir: 'locales', defaultLocale: 'zh-CN', strategy: 'no_prefix', detectBrowserLanguage: {
            useCookie: true, cookieKey: 'i18n_redirected', redirectOn: 'root'
        }
    }, build: {
        transpile: ['vuetify'],
    }, vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
