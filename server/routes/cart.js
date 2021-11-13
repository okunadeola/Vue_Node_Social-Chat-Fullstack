import express from "express"
import { createCart, deleteCart, getCart, getUserCart, updateCart } from "../controllers/cart.js"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/userUpdate.js"


const route = express.Router()

route.post('/', verifyTokenAndAuthorization, createCart)
route.put('/', verifyTokenAndAuthorization, updateCart)
route.delete('/:id', verifyTokenAndAuthorization, deleteCart)
route.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)
route.get('/', verifyTokenAndAdmin, getCart)


export default route 