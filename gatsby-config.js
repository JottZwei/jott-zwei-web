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
        theme_color: `#010e1e`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    `gatsby-plugin-preact`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-minify`
  ],
}
