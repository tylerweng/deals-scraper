import model from './model'

const parseName = (name) => {
  let words = name.split('_')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return words.join(' ')
}

const controller = {
  index: (req, res) => {
    model.find({}).lean().exec((err, doc) => {
      res.json(doc)
    })
  },
  findByBrandNameAndProductName: (req, res) => {
    model.findOne(
      {
        product_name: parseName(req.params.product_name),
        brand_name: parseName(req.params.brand_name),
      }
    ).lean().exec((err, doc) => {
      res.json(doc)
    })
  }
}

export default controller
