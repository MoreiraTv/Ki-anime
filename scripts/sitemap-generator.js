const fs = require('fs')
const globby = require('globby')
function addPage(page) {
  const path = page.replace('src/pages', '').replace('.js', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  console.log(route)
  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    'src/pages/**/*{.js,.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}
generateSitemap()
