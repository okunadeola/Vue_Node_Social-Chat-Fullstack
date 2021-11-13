import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, hidePost, likePost, updatePost } from '../controllers/post.js'

import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authorization.js'

const router = express.Router()

// create a post
router.post("/:id", verifyTokenAndAuthorization, createPost)
// update a post
router.put("/:id", verifyTokenAndAuthorization, updatePost)
// get post
router.get("/:id", verifyTokenAndAuthorization, getPost)
// delete a post
router.delete("/:id", verifyTokenAndAuthorization, deletePost)
// like a post
router.put("/like/:id", verifyTokenAndAuthorization, likePost)

// get timeline posts
router.get("/timeline/all/:id", verifyTokenAndAuthorization, getTimelinePosts)
// hide posts
router.post("/restrict/:id", verifyTokenAndAdmin, hidePost)




export default router