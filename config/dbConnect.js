import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', false)
    const connected = await mongoose.connect(
      'mongodb://127.0.0.1:27017/nodejs-ecommerce-api'
    )
    console.log(`Mongodb connected ${connected.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default dbConnect
