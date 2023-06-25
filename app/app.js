import express from 'express'
import dbConnect from '../config/dbConnect.js'
import userRoutes from '../routes/usersRoute.js'
import dotenv from 'dotenv'
import {
  globalErrhandler,
  notFound,
} from '../middlewares/globalErrorHandler.js'
import productsRouter from '../routes/productsRoute.js'
import categoriesRouter from '../routes/categoriesRouter.js'
import brandsRouter from '../routes/brandsRouter.js'
import colorRouter from '../routes/colorRouter.js'
import reviewRouter from '../routes/reviewRouter.js'
import orderRouter from '../routes/ordersRouter.js'

dotenv.config()
// db connect
dbConnect()
const app = express()
// pass incoming data
app.use(express.json())

// routes
app.use('/api/v1/users/', userRoutes)
app.use('/api/v1/products/', productsRouter)
app.use('/api/v1/categories/', categoriesRouter)
app.use('/api/v1/brands/', brandsRouter)
app.use('/api/v1/colors/', colorRouter)
app.use('/api/v1/reviews/', reviewRouter)
app.use('/api/v1/orders/', orderRouter)

// err middleware
app.use(notFound)
app.use(globalErrhandler)

export default app
