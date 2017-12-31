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
        let searchResult = $("script[id=searchResult]").html()
        console.log(JSON.parse(searchResult))
      } else {
        console.log(`Error searching Sephora ${err}`)
      }
    })
  }
}

export default SephoraScraper