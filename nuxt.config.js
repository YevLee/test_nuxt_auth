module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test_nuxt_auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
   '@nuxtjs/proxy',
   '@nuxtjs/auth',
    // ...Axios module should be included AFTER @nuxtjs/auth
   '@nuxtjs/axios'
  ],
  proxy: [
    ['/api', { target: process.env.PROXY_API_URL || 'http://shop-api.rekoon.cn', pathRewrite: { '^/api': '/api' } }]
  ],
  // Default Values
  auth: {
   user: {
     endpoint: 'user/first',
     propertyName: 'data',
     resetOnFail: true
   },
   login: {
     endpoint: 'auth/login',
   },
   logout: {
     endpoint: 'auth/logout',
     method: 'GET',
   },
   redirect: {
     notLoggedIn: '/login',
     loggedIn: '/'
   },
   token: {
     enabled: true,
     type: 'Bearer',
     localStorage: true,
     name: 'token',
     cookie: true,
     cookieName: 'token'
   }
 },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
