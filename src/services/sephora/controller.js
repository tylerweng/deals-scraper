import model from './model'

const controller = {
  index: (req, res) => {
    model.find({}).lean().exec((err, doc) => {
      res.json(doc)
    })
  }
}

export default controller
