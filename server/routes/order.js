import express from "express"
import { createOrder, deleteOrder, getIncome, getOrders, getUserOrder, updateOrder } from "../controllers/order.js"
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/userUpdate.js"



const route = express.Router()

route.post('/', verifyTokenAndAuthorization, createOrder)
route.put('/', verifyTokenAndAdmin, updateOrder)
route.delete('/:id', verifyTokenAndAdmin, deleteOrder)
route.get('/find/:userId', verifyTokenAndAuthorization, getUserOrder)
route.get('/', verifyTokenAndAdmin, getOrders)
route.get('/income', verifyTokenAndAdmin, getIncome)


export default route 