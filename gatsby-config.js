require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    // `gatsby-transformer-yaml`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./resume`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.API_KEY,
  
        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
  ],
};
