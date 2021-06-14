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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 500
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-159919953-3',
          cookieName: 'gatsby-gdpr-google-analytics', 
          anonymize: true,
          allowAdFeatures: false
        },
        environments: ['production', 'development']
      },
    }
  ],
}
