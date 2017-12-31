import request from 'request'
import cheerio from 'cheerio'

import Model from './model'

const url = "https://www.sephora.com/search/saleResults.jsp?keyword=Sale&sale=true&pageSize=-1&currentPage="

const scrape = () => {
  console.log('SephoraScraper onTick')
  let currentPage = 1
  request(url + currentPage, (err, res, html) => {
    if (!err) {
      const $ = cheerio.load(html)
      // console.log(html)
      const searchResult = JSON.parse($("script[id=searchResult]").html())
      // console.log(searchResult)
      const products = searchResult["products"]
      const timestamp = Date.now()
      products.forEach(product => {
        if (!product["derived_sku"] || !product["derived_sku"]["sale_price"]) {
          return
        }
        const product_name = product["display_name"]
        const brand_name = product["brand_name"]
        const product_url = product["product_url"]
        const image_url = product["hero_image"]
        const sale_price = Number(product["derived_sku"]["sale_price"])
        const list_price = Number(product["derived_sku"]["list_price"])
        const model = new Model({
          product_name: product_name,
          brand_name: brand_name,
          product_url: product_url,
          image_url: image_url,
          sale_price: sale_price,
          list_price: list_price,
          timestamp: timestamp
        })
        model.save()
      });
    } else {
      console.log(`Error searching Sephora ${err}`)
    }
  })
}

export default scrape