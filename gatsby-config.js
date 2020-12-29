/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,

})

module.exports = {
  siteMetadata: {
  title: "BackRoads",
  description: 
  `Explore awesome worldwide tours and discover what makes each of 
   them unique Forget your daily routine and say yes to adventure`,
  author: "@johnDoe",
  data: {
    name:"sumair",
    age:24,
  },

  },

  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
    
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`
],
}
