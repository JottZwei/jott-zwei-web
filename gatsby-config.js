module.exports = {
  siteMetadata: {
    title: `Jott Zwei Werbeagentur`,
    description: `Ihre neue Lieblingsagentur. ♥`,
    author: `Jan Francksen`,
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
        name: `Jott Zwei Werbeagentur`,
        short_name: `Jott Zwei`,
        start_url: `/`,
        background_color: `#010e1e`,
        theme_color: `#F26F71`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-159919953-3", // Google Analytics / GA
          //"AW-CONVERSION_ID", Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID" Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
}
