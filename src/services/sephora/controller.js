import model from './model'
import errors from '../../errors'

// In mongoose limit = -x is same as limit = x
// limit = 0 is no limit (so returns all in collection)

const controller = {
  index: (req, res) => {
    console.log(req.query)
    model.find({})
    .limit(req.query.limit === undefined ? 0  : Number(req.query.limit))
    .lean().exec((err, doc) => {
      res.json(doc)
    })
  },
  findAllByBrandName: (req, res) => {
    model.find(
      {
        brand_name: req.params.brand_name
      }
    )
    .limit(req.query.limit === undefined ? 0 : Number(req.query.limit))
    .lean().exec((err, doc) => {
      if (doc.length === 0) {
        res.status(404).send(errors[404])
      } else {
        res.json(doc)
      }
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
