module.exports = {
  siteMetadata: {
    title: `Webreznov - web developer`,
    description: `Create convenient and effective sites, email layout and web applications. Use react, nodejs, postgresql`,
    author: `@webreznov`,
    siteUrl: `https://webreznov.site/`,
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
    `gatsby-plugin-use-query-params`,
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
        icon: `src/images/og.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/index-admin']
      }
    },
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     trackingId: 80587351,
    //     webvisor: true,
    //     trackHash: true,
    //     afterBody: true,
    //     defer: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-89D400E95C", // Google Analytics / GA
          //"AW-529243088", // Google Ads / Adwords / AW
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          exclude: ["/index-admin"],
        },
      },
    },
  ],
}
