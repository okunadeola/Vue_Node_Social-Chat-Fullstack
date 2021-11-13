import express from 'express'
import { deleteUser, followUser, getUser, getUsers, restrictUser, unfollowUser, updateUser } from '../controllers/user.js'
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authorization.js'

const router = express.Router()

// get all user
router.get("/", verifyTokenAndAuthorization, getUsers)
// update 
router.put("/:id", verifyTokenAndAuthorization, updateUser)
// get user
router.get("/:id", verifyTokenAndAuthorization, getUser)
// delete user
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
// follow user
router.put("/follow/:id", verifyTokenAndAuthorization, followUser)
// unfollow user
router.put("/unfollow/:id", verifyTokenAndAuthorization, unfollowUser)
// restrict user
router.post("/restrict/:id", verifyTokenAndAdmin, restrictUser)




export default router















// import express from "express"
// import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/userUpdate.js"
// import { updateUser, deleteUser, getUser, getAllUsers, usersStats } from "../controllers/user.js"


// const router = express.Router()

// router.put('/:id', verifyTokenAndAuthorization, updateUser)
// router.delete("/:id", verifyTokenAndAdmin, deleteUser)
// router.get("/find/:id", verifyTokenAndAdmin, getUser)
// router.get("/", verifyTokenAndAdmin, getAllUsers)
// router.get("/stats", verifyTokenAndAdmin, usersStats)

// export default router 