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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    'gatsby-plugin-image'
  ],
}
