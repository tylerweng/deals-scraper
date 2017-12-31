import request from 'request'
import cheerio from 'cheerio'

import Model from './model'

const url = "https://www.sephora.com/search/saleResults.jsp?keyword=Sale&sale=true&pageSize=-1&currentPage="

let currentPage = 1
let count = 0

const scrape = () => {
  console.log('SephoraScraper onTick')
  request(url + currentPage, (err, res, html) => {
    if (!err) {
      const $ = cheerio.load(html)
      const searchResult = JSON.parse($("script[id=searchResult]").html())
      const products = searchResult["products"]
      if (products.length === 0) {
        console.log(`Finished scraping! Scraped a total of ${count} items from ${currentPage} pages`)
        return
      }
      const timestamp = Date.now()
      for (let i = 0; i < products.length; i++) {
        let product = products[i]
        if (!product["derived_sku"] || !product["derived_sku"]["sale_price"]) {
          continue
        }
        count++
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

        // Check if doc exists
        Model.findOne({
          "product_name": product_name
        }, (err, doc) => {
          // If no doc with product_name exists, save it
          if (doc == null) {
            model.save()
            console.log(`new model obtained: ${model}`)
          } else if (doc["sale_price" != sale_price || doc["list_price"] != list_price]) {
            console.log(`doc prior to update: ${doc}`)
            doc["sale_price"] = sale_price
            doc["list_price"] = list_price
            doc["timestamp"] = timestamp
            doc.save()
            console.log(`doc post update: ${doc}`)
          }
        })
      }
      currentPage++
      scrape()
    } else {
      console.log(`Error scraping Sephora ${err}`)
    }
  })
}

export default scrape