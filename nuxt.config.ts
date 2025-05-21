// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    app: {
      // Make sure environment variables are respected by the app
      baseURL: process.env.BASE_URL || '/'
    },
    nitro: {
      // Pass PORT environment variable to Nitro server
      routeRules: {
        '/**': { cors: true }
      },
    },
    // Use port and host from environment variables for development server
    devServer: {
      port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
      host: process.env.HOST || '0.0.0.0'
    }
  })
