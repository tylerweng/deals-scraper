import request from 'request'
import cheerio from 'cheerio'

const url = "https://www.sephora.com/search/saleResults.jsp?keyword=Sale&sale=true&pageSize=-1&currentPage="


class SephoraScraper {
  constructor() {

  }
  execute() {
    console.log('SephoraScraper onTick')
    let currentPage = 1
    request(url + currentPage, (err, res, html) => {
      if (!err) {
        const $ = cheerio.load(html)
        // console.log(html)
        const searchResult = JSON.parse($("script[id=searchResult]").html())
        // console.log(searchResult)
        const products = searchResult["products"]
        let totalCount = 0
        let partialCount = 0
        products.forEach(product => {
          totalCount++
          if (!product["derived_sku"] || !product["derived_sku"]["sale_price"]) {
            return
          }
          const product_name = product["display_name"]
          const brand_name = product["brand_name"]
          const product_url = product["product_url"]
          const image_url = product["hero_image"]
          const sale_price = product["derived_sku"]["sale_price"]
          const list_price = product["derived_sku"]["list_price"]
          console.log(`product_name: ${product_name}`)
          partialCount++
        });
        console.log(`totalCount: ${totalCount}`)
        console.log(`partialCount: ${partialCount}`)
        // console.log(products)
        // product_url is the url to product page e.g. 
        // product_url: '/product/beauty-amplifier-set-refresh-spray-P407323'
        // sephora.com/product_url leads to that
        // 
      } else {
        console.log(`Error searching Sephora ${err}`)
      }
    })
  }
}

export default SephoraScraper