import model from './model'

const controller = {
  index: (req, res) => {
    model.find({}).lean().exec((err, doc) => {
      res.json(doc)
    })
  },
  findAllByBrandName: (req, res) => {
    model.find(
      {
        brand_name: req.params.brand_name
      }
    ).lean().exec((err, doc) => {
      res.json(doc)
    })
  },
  findByBrandNameAndProductName: (req, res) => {
    model.findOne(
      {
        product_name: req.params.product_name,
        brand_name: req.params.brand_name
      }
    ).lean().exec((err, doc) => {
      res.json(doc)
    })
  }
}

export default controller
