import { SitemapStream, streamToPromise } from "sitemap"
import { Readable } from "stream"

export default async function handler(req, res) {
  const stream = new SitemapStream({ hostname: "https://portfolio.thefstack.com" })

  const pages = [{ url: "/", changefreq: "monthly", priority: 1.0, lastmod: new Date().toISOString() }]

  return streamToPromise(Readable.from(pages).pipe(stream)).then((data) => {
    res.setHeader("Content-Type", "application/xml")
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400")
    res.write(data.toString())
    res.end()
  })
}
