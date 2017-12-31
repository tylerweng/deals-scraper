import model from './model'
import errors from '../../errors'

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
      if (doc === null) {
        res.status(404).send(errors[404])
      } else {
        res.json(doc)
      }
    })
  }
}

export default controller
