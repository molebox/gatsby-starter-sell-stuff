let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: 'https://gatsby-starter-sell-stuff.netlify.app',
        title: 'gatsby-starter-sell-stuff',
        description: 'A Gatsby ecommerce starter setup with Stripe integration and Sanity for content management.',
        currency: 'USD',
        allowedCountries: ['US', 'GB', 'CA'],
        owner: 'Rich Haines'
      },
    plugins: [
        {
          resolve: `gatsby-source-sanity`,
          options: {
            projectId: process.env.GATSBY_SANITY_PROJECT_ID,
            dataset: process.env.GATSBY_SANITY_DATASET,
          },
        },
        {
          resolve: `gatsby-plugin-nprogress`,
          options: {
            // Setting a color is optional.
            color: `#DE3C4B`,
            // Disable the loading spinner.
            showSpinner: false,
          },
        },
        { 
          resolve: `gatsby-plugin-transition-link`,
          options: {
            // injectPageProps: false,
            layout: require.resolve(`./src/components/base/layout`)
          },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'pages',
              path: `${__dirname}/src/pages/`
            }
          },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              path: `${__dirname}/src/assets/`,
              name: 'assets'
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `gatsby-starter-sell-stuff`,
              short_name: `gatsby-starter-sell-stuff`,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: `#ffffff`,
              display: `standalone`,
              icon: `./src/assets/favicon.png`
            },
          },
          'gatsby-plugin-sitemap',
          {
            resolve: 'gatsby-plugin-brotli',
            options: {
              extensions: ['css', 'html', 'js', 'svg']
            }
          },
          'gatsby-plugin-minify',
          `gatsby-transformer-sharp`, 
          'gatsby-plugin-sharp',
          'gatsby-plugin-theme-ui'
    ]
}