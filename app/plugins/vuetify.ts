// 在下载`@mdi/font`包之后再引入
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        // 使用 global.css 中定义的浅色主题颜色
                        primary: '#191919', // --color-text-primary
                        secondary: '#888', // --color-text-secondary
                        accent: '#191919', // --theme-accent-color
                        background: '#fafafa', // --color-light-bg
                        surface: '#ffffff', // --color-white
                        'on-primary': '#ffffff',
                        'on-secondary': '#ffffff',
                        'on-accent': '#ffffff',
                        'on-background': '#191919', // --color-text-primary
                        'on-surface': '#191919', // --color-text-primary
                        'on-error': '#ffffff',
                        'on-warning': '#ffffff',
                        'on-info': '#ffffff',
                        'on-success': '#ffffff',
                    },
                },
                dark: {
                    colors: {
                        // 使用 global.css 中定义的深色主题颜色
                        primary: '#fffa00', // --color-brand-yellow
                        secondary: '#ccc', // --color-text-light
                        accent: '#fffa00', // --color-brand-yellow
                        background: '#191919', // --color-dark
                        surface: '#1f1f1f', // --color-dark-gray
                        'on-primary': '#191919',
                        'on-secondary': '#191919',
                        'on-accent': '#191919',
                        'on-background': '#ffffff', // --color-white
                        'on-surface': '#ffffff', // --color-white
                        'on-error': '#ffffff',
                        'on-warning': '#ffffff',
                        'on-info': '#ffffff',
                        'on-success': '#ffffff',
                    },
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})
