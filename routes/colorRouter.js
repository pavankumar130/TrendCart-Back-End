import exppress from 'express'
import {
  createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} from '../controllers/colorsCtrl.js'
// import isAdmin from "../middlewares/isAdmin.js";

import { isLoggedIn } from '../middlewares/isLoggedIn.js'
const colorRouter = exppress.Router()

// isAdmin
colorRouter.post('/', isLoggedIn, createColorCtrl)
colorRouter.get('/', getAllColorsCtrl)
colorRouter.get('/:id', getSingleColorCtrl)
colorRouter.delete('/:id', isLoggedIn, deleteColorCtrl)
colorRouter.put('/:id', isLoggedIn, updateColorCtrl)

export default colorRouter
