import { Schema } from 'mongoose'

const schema = new Schema({
  product_name: String,
  brand_name: String,
  product_url: String,
  image_url: String,
  sale_price: Number, 
  list_price: Number,
  timestamp: Date
})

export default schema