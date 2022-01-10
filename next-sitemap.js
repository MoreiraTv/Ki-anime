module.exports = {
  siteUrl: "http://localhost:3000" || "https://ki-anime.vercel.app/",
  generateRobotsTxt: true,
  priority: null,
  changefreq: null,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml', '/post/*', '/anime/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'http://localhost:3000/server-sitemap.xml', // <==== Add here
    ],
  },
}