import exppress from 'express'
import catetgoryFileUpload from '../config/categoryUpload.js'
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
} from '../controllers/categoriesCtrl.js'
import { isLoggedIn } from '../middlewares/isLoggedIn.js'
import isAdmin from '../middlewares/isAdmin.js'

const categoriesRouter = exppress.Router()

categoriesRouter.post(
  '/',
  isLoggedIn,
  isAdmin,
  catetgoryFileUpload.single('file'),
  createCategoryCtrl
)
categoriesRouter.get('/', getAllCategoriesCtrl)
categoriesRouter.get('/:id', getSingleCategoryCtrl)
categoriesRouter.delete('/:id', isLoggedIn, isAdmin, deleteCategoryCtrl)
categoriesRouter.put('/:id', isLoggedIn, isAdmin, updateCategoryCtrl)
export default categoriesRouter
