import express from 'express'
import { register, login } from '../controllers/auth.js'

const router = express.Router()


router.post('/register', register)
router.post('/login', login)

export default router









// import express from "express"
// const router = express.Router()
// import { login, register } from "../controllers/auth.js"


// router.post("/register", register)
// router.post("/login", login)

// export default router;