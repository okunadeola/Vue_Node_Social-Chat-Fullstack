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














