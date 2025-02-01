// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        {
          key: 'taiwlind',
          src: 'https://unpkg.com/@tailwindcss/browser@4',
        },
      ],
    },
  },
});
