import exppress from 'express'
import {
  createBrandCtrl,
  deleteBrandCtrl,
  getAllBrandsCtrl,
  getSingleBrandCtrl,
  updateBrandCtrl,
} from '../controllers/brandsCtrl.js'
// import isAdmin from "../middlewares/isAdmin.js";

import { isLoggedIn } from '../middlewares/isLoggedIn.js'

const brandsRouter = exppress.Router()

brandsRouter.post('/', isLoggedIn, createBrandCtrl)
brandsRouter.get('/', getAllBrandsCtrl)
brandsRouter.get('/:id', getSingleBrandCtrl)
brandsRouter.delete('/:id', isLoggedIn, deleteBrandCtrl)
brandsRouter.put('/:id', isLoggedIn, updateBrandCtrl)

export default brandsRouter
// isAdmin,
