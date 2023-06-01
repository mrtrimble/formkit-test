// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  modules: ['@formkit/nuxt'],
  head: {
    link: [
      { rel: 'stylesheet', ref: 'https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/platform-ui.min.css' },
    ],
  },
});
