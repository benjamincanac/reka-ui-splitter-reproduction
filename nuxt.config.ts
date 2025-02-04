import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
});
