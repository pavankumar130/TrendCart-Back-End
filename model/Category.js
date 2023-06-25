//category schema
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
      default:
        'https://media.istockphoto.com/id/95616764/photo/single-cricket-ball-on-white-background.jpg?s=612x612&w=is&k=20&c=OTtPFOvMmkt6LWb3CWowiHG1cwv-hMQVk0a6bt_OmY4=',
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
)

const Category = mongoose.model('Category', CategorySchema)

export default Category
