module.exports = {
  siteMetadata: {
    title: `Michael Luebbers`,
    siteUrl: `https://www.mikeluebbers.com`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-mdx", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"

      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },]
};

