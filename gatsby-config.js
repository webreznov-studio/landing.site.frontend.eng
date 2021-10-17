module.exports = {
  siteMetadata: {
    title: `Webreznov - web developer`,
    description: `Разработка сайтов, email писем и веб приложений. Создаем удобные и эффективные сайты. Адаптируем верстку под разные устройства и браузеры. Создание электронных писем с фирменным стилем.`,
    author: `@webreznov`,
    siteUrl: `https://webreznov.ru/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     excludes: ['/index-admin']
    //   }
    // },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 80587351,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       "G-6DB8G5F5T8", // Google Analytics / GA
    //       "AW-529243088", // Google Ads / Adwords / AW
    //     ],
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: true,
    //       exclude: ["/index-admin"],
    //     },
    //   },
    // },
  ],
}
