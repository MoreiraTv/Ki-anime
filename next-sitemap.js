module.exports = {
  siteUrl: "https://ki-anime.vercel.app/",
  generateRobotsTxt: true,
  priority: null,
  changefreq: null,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml', '/post/*', '/anime/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ki-anime.vercel.app/server-sitemap.xml', // <==== Add here
    ],
  },
}