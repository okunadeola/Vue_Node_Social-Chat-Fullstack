import express from "express"
import { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } from "../controllers/product.js"
import { verifyTokenAndAdmin } from "../middleware/userUpdate.js"


const route = express.Router()

route.post('/', verifyTokenAndAdmin, createProduct)
route.put('/', verifyTokenAndAdmin, updateProduct)
route.delete('/:id', verifyTokenAndAdmin, deleteProduct)
route.get('/find/:id', getProduct)
route.get('/', getAllProducts)

export default route 